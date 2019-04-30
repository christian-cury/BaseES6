import express from 'express'
import logger from '../utils/Logger'
import pack from '../package.json'
import App from '../src/App'

const app = express()

const port = process.env.PORT || 4000
app.listen(port, async () => {
  logger.info(`Starting ${pack.name} on port ${port}`)
  App.start(app)
})
