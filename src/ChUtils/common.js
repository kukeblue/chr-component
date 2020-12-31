
const utils = {
    loginWxRegisterUrl: '',
    hasRegister: false,
    commonShareConfig:null,
    ip: '127.0.0.0',
    emptyAvatar: 'http://upload.yipingxuan.net/2020100316521098958.jpg',

    getImageCode(url) {
        return url.replace(/[^0-9]/ig,"");
    },
    
    getImageCodeAndSuffix(url) {
        const splitdata = url.split('.');
        return url.replace(/[^0-9]/ig,"") + '.' + splitdata[splitdata.length - 1];
    },

    register(wx, config, {
        title,
        desc,
        link,
        imgUrl,
    }) {
        if(!utils.hasRegister && config) {
            utils.hasRegister = true
            // utils.commonShareConfig = 
            const body = {
                debug:false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: config.appid, // 必填，公众号的唯一标识
                timestamp: config.timestamp, // 必填，生成签名的时间戳
                nonceStr: config.nonceStr, // 必填，生成签名的随机串
                signature: config.signature,// 必填，签名
                jsApiList: [
                    "updateTimelineShareData",
                    "updateAppMessageShareData"
                    // 'chooseWXPay'
                ] // 必填，需要使用的JS接口列表
            }
            wx.config(body);
            wx.ready(function(){
                wx.updateAppMessageShareData({ 
                    title,
                    desc,
                    link,
                    imgUrl,
                    success: function () {
                        // 设置成功
                    }
                })
                wx.updateTimelineShareData({ 
                    title,
                    desc,
                    link,
                    imgUrl,
                    success: function () {
                    // 设置成功
                    }
                })
            });
        }
        else {
            if(!utils.hasRegister) {
                return;
            }
            let data = {
                title,
                desc,
                link,
                imgUrl,
            }
            wx.updateAppMessageShareData({ 
                ...data,
                success: function () {
                    // 设置成功
                }
            })
            wx.updateTimelineShareData({ 
                ...data,
                success: function () {
                // 设置成功
                }
            })
        }
    },
    // 字符串判空
    checkStrValue(str) {
        if(!str) {
            return
        }
        str = str.trim()
        if(!str) {

        }else {
            return str
        }
    },
    // 电话校验
    checkPhoneValue(str) {
        if(!str) {
            return
        }
        str = str.trim()
        if(str) {
            if(!(/^1[3456789]\d{9}$/.test(str))){ 
                return; 
            } 
            return str
        }
    },
    //判断是否是微信
    isInWeixin() { 
        // return true
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
    },
    
    getObCache(key) {
        const v = localStorage.getItem(key)
        if(v) {
            return JSON.parse(v)
        }else {
            return undefined
        }
    },

    setObCache(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    clearCache() {
        localStorage.clear();
    },
    /**
     * 获取num位的数字字符串
     * @param {*} num 
     */
    getRandomNumber(num){
        if(!num) num = 10
        return  Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1)) + '';
    },
    changeTheme(color) {
        let root = document.documentElement;
        if(root) {
            root.style.setProperty('--primary-color', color);
        }else {
            console.log('当前环境未找到root')
        }
    },
    async sleep(t) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, t);
        });
    },

    async wxloginHandle({activity_id}) {
        let split = window.location.href.split('/')
        let path = split[split.length - 1] 
        let state = activity_id + '_' + path
        const host = window.location.host
        const redirect_uri = process.env.redirectUrl + `?source=${window.btoa(host)}`
        const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb0dabea65eb9d7ac&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
        console.log('authUrl',authUrl)
        window.location.href = authUrl
    }
}

export default utils