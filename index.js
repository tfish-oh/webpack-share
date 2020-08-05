console.log('world   hello everybody')

// const marked = require("marked");
import md from './markdown/test.md'

var node = document.createElement('div')
console.log(md)
node.innerHTML = md
document.body.append(node)