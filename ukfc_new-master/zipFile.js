var zipper = require("zip-local");
console.log('打包web文件夹开始...');
zipper.sync.zip("./web").compress().save("./web.zip");
console.log('打包web文件夹结束！');
