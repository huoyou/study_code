//skeleton.js
const fs = require('fs')
const path = require('path')
const cheerio  = require('cheerio');
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer;

console.log('骨架屏生成开始...');

let htmlStr = fs.readFileSync(path.join(__dirname, './web/index.html'), 'utf-8');
let $ = cheerio.load(htmlStr);
let $app = $('#app');
/*必须要加<!--vue-ssr-outlet-->才能生成骨架屏*/
$app.html($app.html() + '<!--vue-ssr-outlet-->');
let template = $.root().html();
const renderer = createBundleRenderer(path.join(__dirname, './skeleton_dist/skeleton.json'), {
 //template: fs.readFileSync(path.join(__dirname, './public/index-template.html'), 'utf-8')
 template: template
});

renderer.renderToString({}, (err, html) => {
 //console.log('html', html);
 //fs.writeFileSync(path.join(__dirname, './public/index.html'), html, 'utf-8')
 fs.writeFileSync(path.join(__dirname, './web/index.html'), html, 'utf-8');
 console.log('骨架屏生成结束！');
});
