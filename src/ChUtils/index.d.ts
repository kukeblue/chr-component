
type requsetPram = {
    url: string, data: any, cache?: boolean, method?: string
}


declare var ChUtils: {
    RequestConfig: {}
    request: (p:requsetPram)=>Promise<any>
}

export default ChUtils;