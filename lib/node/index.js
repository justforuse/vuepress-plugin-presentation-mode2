// import { path } from '@vuepress/utils'
const { path } = require("@vuepress/utils")
module.exports = {
  name: 'vuepress-plugin-presentation-mode2',
  clientAppEnhanceFiles: path.resolve(__dirname, '../client/index.js').replace(/\\/g, '/'),
}
