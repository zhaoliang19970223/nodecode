// function fn(){
//     console.log(666)
// }
// fn();

// let n =123;
// function fn(){
//     console.log(666)
// }
// let obj = {
//     name: 'hello',
//     age: 18,
//     fn(){
//         console.log(888);
//         return 'ok'
//     }
// }

/* -------------------------- */

// module.exports.fn = fn;
// module.exports.num = n;
// module.exports.obj = obj;

// console.log('module.exports--->',module.exports);

// /* 两秒之后输出    abc就有了 */
// setTimeout(console.log,2000,module.exports);


// let fn =() => {
//     console.log('666 ---->',6666);
// }

// let a = 985;

// module.exports = a;

/* -------------------------- */


    // let n =123;
    // function fn(){
    //     console.log(666)
    // }
    // let obj = {
    //     name: 'hello',
    //     age: 18,
    //     fn(){
    //         console.log(888);
    //         return 'ok'
    //     }
    // }
    // module.exports.fn = fn;
    // module.exports.num = n;
    // module.exports.obj = obj;

    // function init(){
    //     console.log(1123);
    // }
    // exports.init = init;

    // //直接给module赋值的话,就相当于切断了指向obj的线,将会直接把值暴露出来
    // module.exports = init;
    // console.log('exports---->',typeof(exports));

let fn =() => {
    console.log(666);
}

let fn1 =() => {
    console.log(6661);
}

module.exports = fn1;
module.exports = fn;