# now-go [![npm-version][npm-badge]][npm-link]

Create tinyurl/redirection service with ease.

<p align="center">
  <img src="https://amio.github.io/now-go/ocelot.jpg" /><br/>
  <i>Now go, let the legend come back to life!</i>
</p>

## Features

- Lightweight tinyurl service (in 100 lines).
- Three types of routes:
  - URL: redirect to an url
  - TEXT: echo a string
  - FUNCTION: return a URL/TEXT by `req` argument
- Deploy to now.sh with one command.

## Quick Start

- cli
  ```bash
  npm i -g now-go
  now-go -c path/to/config.json
  ```

- programmatically
  ```javascript
  const go = require('now-go')
  const config = require('./path/to/config.json') // routes config

  go(config)  // Start server on port 3000
  ```

## Example config

content of `config.json`:

```javascript
{
  // 302 redirection
  "/": "https://example.com",

  // echo text
  "/tag": "Now go, let the legend come back to life!",

  // "*" is a special route for unmatched path
  "*": "Yet another tinyurl service."
}
```

or you can use function for more advanced usage, like [`example.config.js`](example.config.js) (*The config for http://go.now.sh.*)

```javascript
// example.config.js
module.exports = {
  // stright routes
  "/": "https://example.com",
  "/hi": "Hello there!",

  // functional route
  "*": (req) => `This ${req.url} leads to nowhere.`
}
```

## License

[MIT](./LICENSE) © [Amio][author]

[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit-link]: http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
