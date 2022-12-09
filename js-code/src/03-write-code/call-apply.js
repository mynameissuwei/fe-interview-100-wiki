function call(context,...args) {
    if(context == null) context = window 
    if(typeof context != 'object') context = new Object(context) 
    let key = Symbol()
    // this 为调用的函数
    context[key] = this 
    let res = context[key](...args)
    delete context[key]
    return res
}



function apply(context,args) {
    if(context == null) context = window 
    if(typeof context != 'object') context = new Object(context) 
    let key = Symbol()
    // this 为调用的函数
    context[key] = this 
    let res = context[key](...args)
    delete context[key]
    return res
}