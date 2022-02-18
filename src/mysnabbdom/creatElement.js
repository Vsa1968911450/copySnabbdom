export default function createElement(vnode){
  // 虚拟节点插入到标杆前pivot之前
  let domNode = document.createElement(vnode.elm)
  // 子节点是否有文本
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
    domNode.innerText = vnode.text
    // // 让标杆的父元素调用insertBefore将他上树
    // pivot.parentNode.insertBefore(domNode,pivot)
  } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 里面是数组 递归
    let chiid = vnode.chiidren
    chiid.forEach(element => {
        let chdom =  createElement(element)
        vnode.elm.appendChild(chdom)
      });
  }
  vnode.elm = domNode
  return vnode.elm
}