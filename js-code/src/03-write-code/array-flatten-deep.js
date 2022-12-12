// function arrayFlatten(ary) {
//     let result = [] 
//     ary.forEach(item => {
//         if(Array.isArray(item)) {
//             let res = arrayFlatten(item)
//             result = result.concat(res)
//         } else {
//             result = result.concat(item)
//         }
//     })
//     return result 
// }
// let ary = [1,2,3,4,[1,2,3,[2,3,4]]]
// let result = arrayFlatten(ary)

// function arrayFlatten(ary) {
//     let result = []
//     ary.forEach(item => {
//         if(Array.isArray(item)) {
//             let res = arrayFlatten(item)
//             result = result.concat(res)
//         } else {
//             result = result.concat(item)
//         }
//     });
//     return result 
// }

// let array = [1,2,3,4,[1,2,3,[2,3,4]]]
// let res = arrayFlatten(array)
