// 1、
// 答：执行结果为10
// 解释：for循环中使用var关键字声明的变量i为全局变量(var不会生成块级作用域)，因此当a[i]这个函数执行时，里面的console.log(i)语句输出的i就是全局上声明的i

// 2、
// 答：会报错： Cannot access 'tmp' before initialization
// 解释：在通过let或const声明了变量的作用域中，先使用再声明该变量，就会报这个错误。
// 补充：let和const在创建上下文阶段，虽然不会像var一样变量提升，但是和var一样的是会注册标识符。这就是为什么在let或const声明之前使用变量，依然可以成功抛出错误，而不是直接打印出全局的123。

// 3、
// 答：
var arr = [12, 34, 32, 89, 4];
console.log(Math.min(...arr))
// 解释：使用ES6展开数组的方式最简便。如果不用ES6就需要利用apply方法去达到展开参数列表的目的。

// 4、
// 答：1、var会变量提升，let和const不会
//     2、let和const会生成块级作用域，var不会
//     3、const声明的变量需要初始化值，并且赋值后值不能再改变。如果该值为引用类型，则引用地址不可改变，但是引用地址存储的值是可以改变的。
//     4、如果一个作用域中有let或者const声明了变量，如果在声明前使用该变量则会报 Cannot access 'xxx' before initialization。var则不会。
//     5、let和const重复声明一个已经声明过的变量会报错，var不会。

// 5、
// 答：执行结果为20
// 解释：箭头函数本身没有this，当遇到箭头函数中出现this时，沿着作用域向上找最近的function是fn，这个fn最终是由obj调用的，因此这个this指向obj，this.a为20

// 6、
// 答：Symbol类型主要用于模拟私有属性

// 7、
// 答：浅拷贝只复制一层对象的属性、值引用。深拷贝则递归复制了所有层级、地址引用。

// 8、 
// 答：
// JS异步编程的目的是为了解决同步阻塞的问题，大多数语言实现异步的办法是多线程，但是由于JS的执行环境是单线程的，所以它的异步实现方式目前主要有回调函数、发布订阅模式、Promise、生成器四类。EventLoop就是我们平时所说的“事件循环”，作用是用来调度JS代码块依次完成。宏任务和微任务可以看做是两个队列，每当一个宏任务完成时，微任务列表会被检查一遍，直到当前的微任务都处理完成，才会开始下一个宏任务。宏任务包括：
// script(整体代码)
// setTimeout
// setInterval
// I/O
// UI交互事件
// postMessage
// MessageChannel
// setImmediate(Node.js 环境)
// 微任务包括：
// Promise.then
// Object.observe
// MutaionObserver
// process.nextTick(Node.js 环境)


// 9、
// 答：
new Promise((res,rej) => {
    let str = 'hello'
    setTimeout(function(){
        res(str)
    }, 10)
}).then((str)=>{
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(str + 'lagou')
        }, 10)
    })
}).then((str)=>{
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(str + 'I ❤ U')
        }, 10)
    })
}).then((str)=>{
    console.log(str)
})

// 10、
// 答：TypeScript是Javascript的超集。即，在TS中我们可以使用JS的所有语法功能，除此之外，TS做了很多补充，如强类型、接口、类、继承等。最终TS会被编译为JS并运行在浏览器或者node环境中。

// 11、
// 答：TypeScript最大的优点在于他是强类型语言（或者说它在编译阶段会做类型检查）。因为弱类型语言在开发具有一定体量的项目时，会导致代码可读性变差的问题。除此之外它补充了很多对于面向对象语言很重要的概念，比如接口、抽象类。我认为TS目前主要的缺点是和Vue2.0兼容性的问题（或者说是Vue的缺点？）。至于语言啰嗦这个问题，这是强类型语言的共有特性。门槛相对于JS较高也只是对于只了解过JS的人员，对于熟悉其他面向对象语言的人员，接口、泛型都是一些“很天然”的概念，。
