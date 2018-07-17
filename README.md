# now-go [![npm-version][npm-badge]][npm-link] [![install-size][pp-badge]][pp-link]

Create tinyurl/redirection service with ease.

<p align="center">
  <img src="https://amio.github.io/now-go/ocelot.jpg" /><br/>
  <i>Now go, let the legend come back to life!</i>
</p>

## Features

- Lightweight tinyurl service (~50 sloc).
- Three types of routes:
  - __`URL`__: redirect to an url
  - __`TEXT`__: echo a string
  - __`FUNCTION`__: accepts `req` argument, returns `URL`/`TEXT` routes
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

### JSON file `go-config.json`:

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

### JS file `go-config.js`

```javascript
// example.config.js
module.exports = {
  // simple routes
  "/": "https://example.com",
  "/hi": "Hello there!",

  // functional route
  "*": (req) => `This ${req.url} leads to nowhere.`
}
```

### Live Demo

- https://go.now.sh and [it's config.js](example.config.js)


## License

[MIT](./LICENSE) © [Amio][author]

[npm-badge]:https://badgen.now.sh/npm/v/now-go.svg
[npm-link]: http://www.npmjs.com/package/now-go
[pp-badge]: https://packagephobia.now.sh/badge?p=now-go
[pp-link]: https://packagephobia.now.sh/result?p=now-go
[mit-link]: http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
