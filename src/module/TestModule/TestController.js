import TestService from './TestService'

class TestController {
  constructor(router) {
    this.testService = new TestService()
    router.get('/test', this.testService.test.bind(this.testService))
  }
}

export default TestController
