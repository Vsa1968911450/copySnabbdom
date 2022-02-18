import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
// var mtVnode = h('a',{props:{href:'http://www.baidu.com'}},'121212121')
var mtvnode2 = h('div',{},[
  h('li',{key:1},'1'),
  h('li',{key:2},'2'),
  h('li',{key:3},'3'),
  h('li',{key:4},'4')
])
var mtvnode3 = h('div',{},[
  h('li',{key:1},'1'),
  h('li',{key:2},'2'),
  h('li',{key:3},'3'),
  h('li',{key:4},'4'),
  h('li',{key:5},'5')
])
// let mtvod = h('div',[
//   h('ul',[
//     h('li')
//   ])
// ])
// console.log(mtvod)
const patch =init([classModule,propsModule,styleModule,eventListenersModule])
const container = document.getElementById("container");
const btn = document.getElementById("btn");
patch(container,mtvnode2)
btn.onclick = function(){
  patch(mtvnode2,mtvnode3)
}
// const patch = init([
//   // Init patch function with chosen modules
//   classModule, // makes it easy to toggle classes
//   propsModule, // for setting properties on DOM elements
//   styleModule, // handles styling on elements with support for animations
//   eventListenersModule, // attaches event listeners
// ]);

// const container = document.getElementById("container");

// const vnode = h("div#container.two.classes", { on: { click: function(){} } }, [
//   h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//   " and this is just normal text",
//   h("a", { props: { href: "/foo" } }, "I'll take you places!"),
// ]);
// // Patch into empty DOM element – this modifies the DOM as a side effect
// patch(container, vnode);

// const newVnode = h(
//   "div#container.two.classes",
//   { on: { click: function(){} } },
//   [
//     h(
//       "span",
//       { style: { fontWeight: "normal", fontStyle: "italic" } },
//       "This is now italic type"
//     ),
//     " and this is still just normal text",
//     h("a", { props: { href: "/bar" } }, "I'll take you places!"),
//   ]
// );
// // Second `patch` invocation
// patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state