'use strict'

const Readable = require('stream').Readable

module.exports = (ctx, next) => {
  // const readableStream = new Readable()
//   readableStream._read = () => { }
//
//   ctx.body = readableStream
  ctx.type = 'html';

  ctx.respond = true
  
  let req = ctx.req
  let res = ctx.res

  ctx.write = (chunk) => {
    res.write(chunk)
  }
  
  ctx.end = () => {
    res.end(null)
  }
  
  return next()
}

