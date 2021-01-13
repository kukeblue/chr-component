export const setObCache = (key:string, value: any, _expiresTime?: number) => {
    if(_expiresTime) {
        let expiresTime = _expiresTime * 1000
        console.log('debug: setObCache 设置缓存过期时间成功', _expiresTime + 's')
        value.expiresTime = expiresTime
        value.created = (new Date()).getTime()
    }
    localStorage.setItem(key, JSON.stringify(value))
}

export const getObCache = (key:string) => {
    let _ob: any = localStorage.getItem(key)
    if(_ob) {
        if(_ob.expiresTime) {
            let isExpires = (new Date()).getTime() -  _ob.created > _ob.expiresTime
            if(!isExpires) {
                console.log('debug: getObCache 获取缓存未过期', _ob)
                delete _ob.expiresTime
                delete _ob.created
                return JSON.parse(_ob)
            }else {
                clearObCache(key)
            }
        }else {
            return JSON.parse(_ob)
        }
    }
}

export const clearObCache = (key:string) => {
    localStorage.setItem(key, '')
}
