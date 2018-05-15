# now-go [![npm-version][npm-badge]][npm-link]

A tinyurl service.

<p align="center">
  <img src="https://amio.github.io/now-go/hero.jpg" /><br/>
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
  ```
  npm i -g now-go
  now-go -c path/to/config.json
  ```

- programaticly
  ```javascript
  import nowgo from 'now-go'

  const config = {/*...*/} // routes config
  go(config)
  ```

## The `example.config.json`

All configurations are optional:

```javascript
{
  // redirect to a url
  "/": "https://github.com/amio/now-go",
  // echo a string
  "/tag": "Now go, let the legend come back to life!",

  // special route for __unmatched path__
  "*": "Yet another tinyurl service by now-go. https://github.com/amio/now-go"
}
```

*This is the config for http://go.now.sh.*

## License

[MIT][mit] © [Amio][author]

[now]:      https://zeit.co/now
[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
[config-eg]:https://github.com/amio/now-go/blob/master/example.config.js
