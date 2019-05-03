import TestHelper from './TestHelper'

class TestService {
  constructor() {
    this.helper = new TestHelper()
  }

  async test(req, res) {
    this.helper
      .test(req.query.data)
      .then(data => res.json(data))
      .catch(error => res.status(400).json(error))
  }
}

export default TestService
