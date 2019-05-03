import { logger, Env, app } from 'realm-sdk'
import pack from '../package.json'
import App from '../src/App'

Env.init().then(() => {
  app.listen(Env.PORT, async () => {
    logger.info(`Starting ${pack.name} on port ${Env.PORT}`)
    App.start(app)
  })
})
