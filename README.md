# koa-bigpipe

a simple bigpipe impl with koa 2.x

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/koa-bigpipe?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/koa-bigpipe.svg?style=flat-square)](https://www.npmjs.com/package/koa-bigpipe)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```
npm i -S koa-bigpipe
```

## Usages

```js
app.use(require('koa-bigpipe'))
```

## API

- ctx.write(chunk)
- ctx.end()

### ctx.write(chunk)

write chunk to browser. if chunk == null or undefined, it will end.

### ctx.end()

end response

### ctx.chunks

```
let count = ctx.chunks.length
```

## Examples

```js
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
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 init

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
