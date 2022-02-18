import vnode from './vnode.js';
// 简单试着写写 只限于调用到时候是下面三种
// h('div',{},text)
//h('div',{},[])
// h('div',{},h())
export default function h(sel,data,c){
  // 检查参数个数
  if(arguments.length !=3) {
    throw Error('三个参数')
  }
  if(typeof c== 'string' || typeof c == 'number'){
    return vnode(sel,data,undefined,c,undefined)
  } else if(Array.isArray(c)){
    console.log('1212我来了')
    let children = []
    c.forEach(item=>{
      if(!(typeof item == 'object' && item.hasOwnProperty('sel'))){
        throw Error('传入数组有项不是h函数')
      }
      children.push(item)
    })
    return vnode(sel,data,children,c,undefined)
  } else if(typeof c == 'object' && c.hasOwnProperty('sel')){
    let children = [c]
    return vnode(sel,data,children,c,undefined)
  }
}