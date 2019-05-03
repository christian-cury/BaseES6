class TestHelper {
  async test(data) {
    return new Promise((resolve, reject) => {
      try {
        resolve({ message: 'Only test' })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default TestHelper
