import express from 'express'
import TestController from './TestModule/TestController'

class ModuleRoutes {
  static async init(app) {
    return new Promise((resolve, reject) => {
      try {
        const router = express.Router()
        new TestController(router)
        app.use('/module/', router)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default ModuleRoutes