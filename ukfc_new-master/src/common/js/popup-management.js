let zIndex = 1000;
let hasZIndexInited = false;
const popupManager = {
  // 获取索引
  getNextZIndex(){
    if(!hasZIndexInited){
      hasZIndexInited = true;
      let zi = zIndex;
      zIndex++;
      return zi;
    }
    return zIndex++;
  }
};
export {popupManager};
