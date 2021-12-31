module.exports = async (ctx, next) => {
  const start = Date.now()
  ctx.response.body = '111'
  await next()
  const end = Date.now()
  const duration = end - start
  ctx.set('X-Response-Time', duration + 'ms')
}