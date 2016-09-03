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

## Quick Start

An example repo: https://github.com/amio/now-go-instance

```bash
# grab the example repo
git clone --depth 1 git@github.com:amio/now-go-instance.git

# edit your redirection rules
vim now-go-instance/config.json

# deploy to now.sh (perfect for a tinyurl service).
now now-go-instance
```

That's it! Your tinyurl service is online now.

If you don't have `now` yet, `npm install -g now`.
Don't miss this awesome tool for [realtime global deployments][now].

## The `config.json`

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
    "?": "What are you looking for"
  },
  "port": 3000
}
```

This is the config powers http://go.now.sh, go try it.
(While, maybe not exactly the full [latest version][config-eg])

## Remote Config

- Instead of `now-go -c config.json`, start server with:
```
now-go -c https://example.com/path-to-config.json
```

- Visit root path(the sepcial route "/") will trigger an update task in background -- so called "semi-auto update" :)

## License

[MIT][mit] © [Amio][author]

[now]:      https://zeit.co/now
[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
[config-eg]:https://github.com/amio/now-go-instance/blob/master/config.json
