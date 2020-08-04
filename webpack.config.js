const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} =  require('clean-webpack-plugin')
const demoPlugin = require('./demoPlugin')
module.exports={
    mode:'development',
    entry:{
        main:'./index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    resolveLoader:{
        modules:['node_modules','./']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            },
            {
                test: /\.md$/,
                use:[
                    // 'syncLoader'
                    'html-loader',
                    {
                        loader:'syncLoader',
                        // options:{
                        //     message:'888'
                        // }
                    }
                ]
                
            }
        ]
    },
    plugins: [
        new demoPlugin(),
        new HtmlWebpackPlugin({
            filename:'fish.html',
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ]
}