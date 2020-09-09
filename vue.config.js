const path = require('path');
const webapck = require('webpack');

module.exports = {
  // 使用这种webpack的方式配置不生效，应该使用outputDir
  // output: {
  //   path: path.resolve(__dirname, 'bundle')
  // }
  outputDir: 'bundle',
  configureWebpack: {
    plugins: [
      new webapck.BannerPlugin({
        banner: '我是jojo'
      })
    ]
  }
}
