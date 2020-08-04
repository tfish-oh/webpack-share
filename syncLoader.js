const path =require('path')
const { getOptions ,parseQuery } =require("loader-utils")
const marked = require("marked");


module.exports = function (source){
  this.cacheable && this.cacheable()
  // const options = getOptions(this)
  
  try {
    // marked.setOptions(options);
    console.log(marked(source))
    return marked(source)
  } catch (err) {
    this.emitError(err);
    return null
  }
  // return  source 
}













































//同步函数
// module.exports = function (source) {
// console.log(getOptions(this))
// const params = parseQuery('?hot'); // resource: `file?param1=foo`

// console.log(this.query,params)
// //必须有返回值
// // return source
// //可以返回多个参数
// this.callback(null,source)
// }
// 每一个 loader 都可以用 String 或者 Buffer 的形式传递它的处理结果
//异步loader    this.emitFile
// https://github.com/webpack-contrib/file-loader/blob/master/src/index.js
// module.exports =function(source){
  // let callback =  this.async()
  // setTimeout(()=>{
  //   callback(null,'000000000')
  // },1000)
// }
