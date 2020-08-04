
class DemoPlugin {
    constructor() {
        console.log('init')
    }
    //钩子的执行事件怎么确定的？对应到事件是上面是怎么对应到
    apply(compiler) {
        // console.log(compiler.hooks.entryOption.promise)

        // compiler.hooks.compile.tap('aaa',(compilation) => {
        // })
        // compiler.hooks.emit.tapAsync('bbb',(compilation,fn) => {
        //     compilation.assets['index.md']={
        //         source:function (){
        //         },
        //         size:function(){
        //         }
        //     }
        // })
    }
}

module.exports = DemoPlugin