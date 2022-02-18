import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch'
let vnodes = h('div',{},'1212')
// let vnodes2 = h('div',{},'12121212112')
let vnodes2 = h('div',{},[
  h('li',{},'1'),
  h('li',{},'2'),
  h('li',{},'3'),
  h('li',{},'4'),
  h('li',{},'5')
])
// let vnodes = h('div',{},h('div',{},'12121'))
const container = document.getElementById('container')
patch(vnodes,vnodes2)
console.log(vnodes2)