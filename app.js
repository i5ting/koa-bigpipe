const Koa = require('koa')
const app = new Koa()

const sleep = ms => new Promise(r => setTimeout(r, ms))

app.use(require('.'))

// response
app.use(ctx => {
  // ctx.body = 'Hello Koa'
  ctx.write('loading...<br>')
  
  return sleep(2000).then(function(){
    ctx.write(`timer: 2000ms<br>`)
    return sleep(5000)
  }).then(function(){
    ctx.write(`timer: 5000ms<br>`)
  }).then(function(){
    ctx.end()
  })
})

app.listen(3000)