const path = require('path')
const fileUtils = require('../utils/file_utils')

module.exports = async (ctx, next) => {
  // 获取请求路劲
  const url = ctx.request.url
  // 拼接为本地路径
  let filePath = url.replace('/api', '')
  filePath = '../data' + filePath + '.json'
  filePath = path.join(__dirname, filePath)
  // 读取本地文件
  const ret = await fileUtils.getFileJsonData(filePath)
  // 设置响应体
  ctx.response.body = ret
  next()
}