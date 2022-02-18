import vnode from "./vnode";
import creatElement from "./creatElement"
export default function(oldNode,newNode){
  // 判断老节点是不是虚拟节点
  console.log(oldNode)
  if(oldNode.sel == '' || oldNode.sel === undefined){
    oldNode = vnode(oldNode.tagName.toLowerCase(),{},[],undefined,oldNode)
  }
  // 判断是不是同一个节点
  if(oldNode.key == newNode.key && oldNode.sel == newNode.sel) {
    console.log('同一节点')
  } else {
    console.log('butong')
    let newElmemnt =  creatElement(newNode,oldNode.elm)
    oldNode.elm.parentNode.insertBefore(newElmemnt,oldNode.elm)
  }
}