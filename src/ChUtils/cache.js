export const setObCache = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getObCache = (key) => {
    let _ob = localStorage.getItem(key)
    if(_ob) {
        return JSON.parse(_ob)
    }
}

export const clearObCache = (key) => {
    localStorage.setItem(key, null)
}
