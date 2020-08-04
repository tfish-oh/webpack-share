console.log(666)

import md from './markdown/test.md'
var node = document.createElement('div')
node.innerHTML = md
document.body.append(node)