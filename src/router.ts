import Router from '@koa/router'
import { getIdiom } from './database'

import wordleRouter from './wordle'

const router = new Router()
router.get('/idiom/:str', async (ctx) => {
  const { str } = ctx.params
  const idiom = getIdiom(str)
  ctx.body = idiom || 'null'
})

router.use('/wordle', wordleRouter.routes(), wordleRouter.allowedMethods())

export default router
