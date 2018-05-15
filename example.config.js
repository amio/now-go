module.exports = {
  '/hi': 'eiyo',
  '/home': 'https://go.now.sh',
  '*': (req) => {
    if (req.headers.host === 'localhost:3000') {
      return 'Hi from localhost:3000'
    }
  }
}
