/**
 * Vee不支持【直接多层对象嵌套】的自定义dict形式。我们先写一个多层嵌套的，再用这个方法将其摊平。
 */
export function flatDictMap_outer(dictSource) {

  const dictArr = [];
  flatDictMap(dictSource, []);  // TODO 此处，暂时不是很清楚：为什么第二个参数传  dictArr 不行；而第二个参数传  [] 可以。
  //console.log('dictArr', dictArr);

  const rtn = {};
  dictArr.forEach(item => {
    rtn[item.path] = item.obj;
  });
  return rtn;

  function flatDictMap(dictMap, pathArr) {
    const pairArr = Object.entries(dictMap);

    let isEndLeaf = false;

    for (let i = 0; i < pairArr.length; i++) {
      const pair = pairArr[i];
      const key = pair[0];
      const value = pair[1];

      const arr = [...pathArr, key];

      if (typeof value === "string") {
        // // 字符串，开始准备返回。
        // dictArr.push({
        //   path: arr.join('.'),
        //   obj: pair,
        // });
        isEndLeaf = true;
      } else {
        if (isEndLeaf) {
          throw new Error('建议：对象的同级是对象，string的同级是string')
        }

        // 对象，继续递归。
        flatDictMap(value, arr)
      }
    }

    if (isEndLeaf) {    // 是终端的叶子，则添加到
      dictArr.push({
        path: pathArr.join('_'),
        obj: dictMap,
      })
    }
  }
}
