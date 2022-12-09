function cloneDeep(obj) {
    // 1. 判断是不是obj类型 如果不是obj类型 直接返回值
    if(typeof obj != 'object' || obj == null) {
        return obj 
    }
    let result = Array.isArray(obj) ? [] : {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] == 'object' ? cloneDeep(obj[key]) : obj[key]
        }
    }
    return result
}

