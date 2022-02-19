export default function(sel,data,children,text,elm){
  // 组合成对象
  const key = data.key // data 里面有可能没有
  console.log(elm)
  return {
    sel,data,children,text,elm
  }
}