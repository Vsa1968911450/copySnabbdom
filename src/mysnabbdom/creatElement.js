export default function(vnode,pivot){
  // 虚拟节点插入到标杆前pivot之前
  let domNode = document.createElement(vnode.elm)
  // 子节点是否有文本
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length> 0)){
    domNode.innerText = vnode.text
    // // 让标杆的父元素调用insertBefore将他上树
    // pivot.parentNode.insertBefore(domNode,pivot)
    //补充elm属性
    vnode.elm = domNode
  } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 里面是数组 递归

  }
  return vnode.elm
}