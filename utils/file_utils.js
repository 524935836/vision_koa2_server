const fs = require('fs')

module.exports.getFileJsonData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  }).catch(err => {
    const errorMsg = {
      message: '读取文件内容失败，文件不存在',
      status: 404
    }
    return JSON.stringify(errorMsg)
  })
}