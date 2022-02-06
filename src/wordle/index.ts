import Router from '@koa/router'
import { getIdiom } from '../database'

const ANSWER_LIST = ['狐假虎威']

const router = new Router()

const START_TIME = new Date('2022/02/06').getTime()
const ONEDAY = 24 * 3600 * 1000

const getWordIndex = (date: number) => {
  const index = Math.floor((date - START_TIME) / ONEDAY)
  return index
}

router
  .get('/', (ctx) => {
    const datenow = new Date().setHours(0, 0, 0, 0)
    const answer = ANSWER_LIST[getWordIndex(datenow) % ANSWER_LIST.length]
    const idiom = getIdiom(answer) || {}
    ctx.body = {
      ...idiom,
      next: datenow + ONEDAY,
    }
  })

export default router
