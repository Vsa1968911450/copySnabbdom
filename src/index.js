import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'
// let vnodes = h('div',{},'1212')
let vnodes = h('div',{},[
  h('li',{key:1},'1'),
  h('li',{key:2},'2'),
  h('li',{key:3},'3'),
  h('li',{key:4},'4'),
  h('li',{key:5},'5')
])
// let vnodes = h('div',{},h('div',{},'12121'))
const container = document.getElementById('container')
patch(container,vnodes)
console.log(vnodes)