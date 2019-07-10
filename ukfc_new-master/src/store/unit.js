// 判断对象是否为空对象
export function isEmptyObject (obj){
  for(let attr in obj){
    return false;
  }
  return true;
}
