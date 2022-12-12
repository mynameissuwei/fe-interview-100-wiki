/**
 * @description 实现 new
 * @author 双越老师
 */


//  （1）首先创建了一个新的空对象
//  （2）设置原型，将对象的原型设置为函数的 prototype 对象。
//  （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
//  （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
 
function myNew(fn, ...args) {
    // 判断参数是否是一个函数
    if (typeof fn !== "function") {
        return console.error("type error");
    }
    // 创建一个对象，并将对象的原型绑定到构造函数的原型上
    const obj = Object.create(fn.prototype);
    const value = fn.apply(obj, args); // 调用构造函数，并且this绑定到obj上
    // 如果构造函数有返回值，并且返回的是对象，就返回value ;否则返回obj
    return value instanceof Object ? value : obj;
}



function Foo(name,age) {
    this.name = name 
    this.age = age
    return this
}

// Foo.prototype.getName = function() {
//     return this.name
// }

const f2 = myNew(Foo, '双越', 100)
console.log(f2,'f2222222');
console.info(f2.getName());
