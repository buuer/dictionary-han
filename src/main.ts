import Koa from 'koa'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import router from './router'

const app = new Koa()

app.use(helmet())
app.use(cors())
app.use(bodyParser())
app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())

const PORT = 8081
app.listen(PORT)

console.log(`listening on port ${PORT}`)
