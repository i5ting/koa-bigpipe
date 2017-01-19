/*!
 * koa-bigpipe for koa 2.x
 * Copyright(c) 2017 i5ting
 * MIT Licensed
 */

'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = (ctx, next) => {
  ctx.type = 'html'
  // ctx.respond = false
  ctx.status= 200
  ctx.chunks = []

  let req = ctx.req
  let res = ctx.res

  // write chunk to browser
  ctx.write = (chunk) => {
    if (!chunk) {
      return ctx.end()
    }

    ctx.chunks.push(chunk)

    res.write(chunk)
  }

  // end response
  ctx.end = (chunk) => {
    if (chunk) {
      ctx.write(chunk)
    }

    res.end(null)
  }

  return next()
}
