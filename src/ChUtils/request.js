import { getObCache, setObCache } from "./cache";
import axios from 'axios'

// 默认配置
export const RequestConfig = {
    config: {},
    onRequest: null,  // 请求数据格式化
}

export const request = ({url, data, cache, method}) => {
    return new Promise((resolve, reject)=>{
        const user = getObCache('user') || {}
        if(cache && getObCache(url)) {
            return getObCache(url);
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Auth': user.token  
            },
            method: method || 'post',
            url,
            data,
            transformRequest: [function (data, headers) {
                // Do whatever you want to transform the data
                if(!data) return data;
                Object.keys(data).forEach(key=>{
                    if(data[key] === undefined || data[key] === null) {
                        delete data[key]
                    }
                })
                if(RequestConfig.onRequest) {
                    return RequestConfig.onRequest(data)
                }else {
                    return JSON.stringify(data);
                }
            }],
        }
        Object.assign(config, RequestConfig.config)
        axios(config).then(function (response) {
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
            console.log(`【REQUEST SUCCESS】 访问地址:${url}`)
            console.log(`【REQUEST SUCCESS】 请求参数:`,data)
            console.log(`【REQUEST SUCCESS】 返回结果:`, response.data)
            
            if(response.data && response.data.status === 0) {
                setObCache(url, response.data)
            }
            resolve(response.data)
        }).
        catch(function (error) {
            console.error('ERROR: 请求异常 ！')
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.error('ERROR: 请求失败 ',error);
            } else {
              console.error('ERROR: 请求失败', error);
            }
            reject(error)
        }).finally(()=>{
            // reject('请求超时!')
        });
    })
    
}


const Ajax = {
    RequestConfig,
    request,
}

export default Ajax