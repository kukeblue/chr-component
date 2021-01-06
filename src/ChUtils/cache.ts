export const setObCache = (key:string, value: Object) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getObCache = (key:string) => {
    let _ob = localStorage.getItem(key)
    if(_ob) {
        return JSON.parse(_ob)
    }
}

export const clearObCache = (key:string) => {
    localStorage.setItem(key, '')
}
