import { getObCache, setObCache } from "./cache";
import axios, {Method, AxiosError} from 'axios'

export interface ChResponse<T> {
    list?: T[],
    status: number,
    errorCode: string
    errorMsg: string
    message: string
    page: {pageNo: number, pageSize: number, total: number, pages: number, list: T[]}
    result: null
}

export interface ChCommonResponse {
    list: [],
    status: number,
    errorCode: string
    errorMsg: string
    message: string
    page: {pageNo: number, pageSize: number, total: number, pages: number, list: []}
    result: null
}

// 默认配置
export const RequestConfig:{
    config?: Object,
    onRequest?: Function,
    onError?: (e: AxiosError) => void
} = {
    config: {},
    onRequest: undefined, // 请求数据格式化
    onError: undefined,
}

export const request = (requestPrams: {
    url: string,
    data: any,
    cache?: boolean,
    method?: Method,
}) => {

    const {url, data, cache, method} = requestPrams;

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
            transformRequest: [function (data:any) {
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
        console.log(`【REQUEST SUCCESS】 访问地址:${url}`)
        console.log(`【REQUEST SUCCESS】 请求参数:`,config.data)
        axios(config).then(function (response) {
            console.log(`【REQUEST SUCCESS】 返回结果:`, response.data)
            if(response.data && response.data.status === 0) {
                setObCache(url, response.data)
            }
            resolve(response.data)
        }).
        catch(function (error: AxiosError) {
            console.error('请求抛锚飞到了外太空～')
            RequestConfig.onError && RequestConfig.onError(error);
            reject(error)
        });
    })
    
}


const Ajax = {
    RequestConfig,
    request,
}

export default Ajax