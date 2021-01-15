
// @type Function | @dec 去掉json里的空属性 
const deleteObjectEmptyKey = (data: any) => {
    Object.keys(data).forEach(key=>{
        if(data[key] === undefined || data[key] === null || data[key] === "") {
            delete data[key]
        }
    })
}


export default {
    deleteObjectEmptyKey
}