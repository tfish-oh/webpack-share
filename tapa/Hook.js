
const { AsyncParallelHook, AsyncSeriesWaterfallHook } = require('tapable');

// 创建实列
const asyncParallelHook = new AsyncParallelHook(["name", "age"]);
const asyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook(["name", "age"]);


// // 注册事件
// asyncParallelHook.tap("1", (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("1", name, age, new Date());
//     }, 1000);
//   });
// });

// asyncParallelHook.tap("2", (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2", name, age, new Date());
//     }, 2000);
//   });
// });

// asyncParallelHook.tap("3", (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("3", name, age, new Date());
//     }, 3000);
//   });
// });

// // 触发事件，让监听函数执行
// asyncParallelHook.promise("kongzhiEvent-1", 18);



// 注册事件
asyncSeriesWaterfallHook.tapAsync("1", (name, age) => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
        console.log("1", name, age, new Date());
    //     resolve(1)
    //   }, 1000);
    // });
    
  });
  
  asyncSeriesWaterfallHook.tapAsync("2", (name, age) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("2", name, age, new Date());
        resolve(2)
      }, 2000);
    });
    
  });
  
  asyncSeriesWaterfallHook.tapAsync("3", (name, age) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("3", name, age, new Date());
      }, 3000);
    });
  });
  
  // 触发事件，让监听函数执行
  asyncSeriesWaterfallHook.callAsync("kongzhiEvent-1", 18);


const { SyncHook } = require('tapable')

const syncHook =new SyncHook(['name','age'])
syncHook.tap('1',(name,age)=>{
    console.log('1',name,age)
})

syncHook.tap('2',(name,age)=>{
   console.log('2',name,age)
})
syncHook.tap('3',(name,age)=>{
//    return new Promise((resolve, reject) => {
    //    setTimeout(() => {
         console.log("3", name, age);
    //    }, 3000);
    //  });
})
syncHook.call('fish',8)


