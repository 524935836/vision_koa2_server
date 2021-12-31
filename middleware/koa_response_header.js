module.exports = async (ctx, next) => {
  const contentTyle = 'application/json; charset=utf-8'
  ctx.set('Content-Type', contentTyle)
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST,DELETE")
  await next()
}