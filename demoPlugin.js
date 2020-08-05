
class DemoPlugin {
    constructor() {
        console.log('init')
    }
    //钩子的执行事件怎么确定的？对应到事件是上面是怎么对应到
    apply(compiler) {
        
        compiler.hooks.emit.tapAsync('bbb',(compilation,fn) => {
            let fileList = 'in this build:\n\n'
            console.log(compilation.assets)
            for(var filename in compilation.assets){
                fileList+='-'+filename+'\n'
            }
            compilation.assets['index.md']={
                source:function (){
                   return  fileList
                },
                size:function(){
                    return fileList.length
                }
            }
            fn()
        })
    }
}

module.exports = DemoPlugin