const path = require('path')

// 路径解析
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'element-ui': resolve('src/element-ui'),
        '@element-ui': resolve('src/element-ui'),
        '@': resolve('src')
      }
    },
    devtool: 'none'
  }
}
