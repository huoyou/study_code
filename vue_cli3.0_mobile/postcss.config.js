module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-sprites': {
      basePath: './dist',
      spritePath: './dist/img/sprites',
      retina: true,
      filterBy: function (image) {
        // Allow only png files
        if (image.url.includes('sprites')) {
          if (!/\.png$/.test(image.url)) {
            return Promise.reject(new Error(' Allow only png files'))
          }
          return Promise.resolve()
        }
        return Promise.reject(new Error(' Allow only png files'))
      },
      // 如果需要分组，只需在 assets/sprites 新建一个目录，该目录中的图片会单独的合成一张精灵图
      groupBy: function (image) {
        const spritesPaths = image.url.split('sprites')
        if (spritesPaths.length > 1) {
          const spriteImagePaths = spritesPaths[1].split('/')
          if (spriteImagePaths.length > 2) {
            const groupName = spriteImagePaths[1]
            return Promise.resolve(groupName)
          } else {
            return Promise.reject(new Error('Not a group name.'))
          }
        } else {
          return Promise.reject(new Error('Not a group name.'))
        }
      }
    },
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 1920,
    //   viewportHeight: 938,
    //   unitPrecision: 5,
    //   viewportUnit: 'vw',
    //   selectorBlackList: [],
    //   minPixelValue: 1,
    //   mediaQuery: false,
    //   propList: ['*']
    // },
    // "postcss-px2rem": {
    //   "remUnit": 37.5
    // },
    "postcss-pxtorem": {
      rootValue:         37.5,                              // 值：设计图宽度/20  （目标是将屏幕转化为20rem）
      propList:          ['*'],
      // 该项仅在使用 Circle 组件时需要
      // 原因参见 https://github.com/youzan/vant/issues/1948
      selectorBlackList: ['van-circle__layer'] // 忽略转换正则匹配项
    }
  }
}
