# now-go [![npm-version][npm-badge]][npm-link]

A personal tinyurl service.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/215282/18083956/fd563db8-6ed7-11e6-955a-a107699cbd38.jpg" /><br/>
  <i>Now go, let the legend come back to life!</i>
</p>

## Features

- Lightweight tinyurl service (in 100 lines).
- Semi-auto update with a [remote config](#remote-config).
- Three types of routes:
  - redirect to an url
  - echo a string
  - proxy tunnel
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
  nowgo('./config.json')
  ```

- deploy to now.sh
  ```
  now -e NOW_GO_CONFIG=http://example.com/config.json amio/now-go
  now alias https://now-go-ab78a901.now.sh/ short.example.com
  ```

  If you don't have `now` yet, `npm install -g now`.
  Don't miss this awesome tool for [realtime global deployments][now].

## The `config.json` Example

All configurations are optional:

```javascript
{
  "routes": {
    // redirection (<value> is a url)
    "home": "https://github.com/amio/now-go",
    // proxy mode (<value> is a url prefixed with "PROXY >> ")
    "ocelot.jpg": "PROXY >> https://example.com/path-to-ocelog.jpg",
    // echo a string (<value> is a string)
    "now-go": "Now go, let the legend come back to life!",

    // special route for root path (<key> === "/")
    "/": "Yet another tinyurl service.",
    // special route for unmatched path: (<key> === "?")
    "?": "What are you looking for?"
  },
  "port": 3030 // optional, 3000 by default
}
```

*This is the config for http://go.now.sh.*

## Remote Config

- Instead of `now-go -c config.json`, start server with:
  ```
  now-go -c https://example.com/path-to-config.json
  ```
  or:
  ```
  NOW_GO_CONFIG=https://example.com/path-to-config.json now-go
  ```

*NOTE: Visit root path(the sepcial route "/") will trigger an update task in background -- so called "semi-auto update" :)*

## License

[MIT][mit] © [Amio][author]

[now]:      https://zeit.co/now
[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
[config-eg]:https://github.com/amio/now-go-instance/blob/master/config.json
