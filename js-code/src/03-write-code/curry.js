function add(a,b,c) {
    return a + b + c 
}
function curryAdd(fn) {
    let fnLength = fn.length
    let args = []
    function calc(...newArgs) {
        args = [
            ...args,
            ...newArgs
        ]
        let argLength = args.length
        if(argLength < fnLength) {
            return calc
        } else {
            res = fn.apply(this,args)
        }
        return res 
    }
    return calc
}

let cur = curryAdd(add)
console.log(cur(10)(20)(30))