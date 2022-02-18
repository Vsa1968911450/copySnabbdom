import vnode from "./vnode";
import creatElement from "./creatElement"
export default function patch(oldNode,newNode){
  // 判断老节点是不是虚拟节点
  console.log(oldNode)
  console.log(newNode)
  if(oldNode.sel == '' || oldNode.sel === undefined){
    oldNode = vnode(oldNode.tagName.toLowerCase(),{},[],undefined,oldNode)
  }
  // 判断是不是同一个节点
  if(oldNode.key == newNode.key && oldNode.sel == newNode.sel) {
    console.log('同一节点')
    if(oldNode == newNode) { //内存中相等 
      return
    }
    if(newNode.text != undefined &&(newNode.children == undefined || newNode.children.length == 0)){  //没有子节点且不为空说明有text属性
      console.log('有text属性') 
      // 两个text不同
      if(newNode.text != oldNode.text){
        oldNode.elm.innerText = newNode.text
      } else {
        // 判断有没有children
        if(oldNode.children != undefined && oldNode.children > 0){
          // diff
        } else {
          // 老 没 新 有
          // 清空老的节点
          oldNode.elm.innerHTML = ''
          let d = newNode.children
          d.forEach(item=>{
            let dom = creatElement(item)
            oldNode.elm.appendChild(dom)
          })
          
          
        }
      }
    }
  } else {
    console.log('butong')
    let newElmemnt =  creatElement(newNode,oldNode.elm)
    if(oldNode.elm.parentNode && newElmemnt){
       oldNode.elm.parentNode.insertBefore(newElmemnt,oldNode.elm)
    } 
    oldNode.elm.parentNode.removeChild(oldNode.elm)
  }
}