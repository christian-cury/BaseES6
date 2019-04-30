import ModuleRoutes from './module/ModuleRoutes'
import logger from '../utils/Logger'

class App {
  static async start(app) {
    ModuleRoutes.init(app).catch(error => {
      logger.error(error)
    })
  }
}

export default App
