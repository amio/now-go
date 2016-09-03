# now-go [![npm-version][npm-badge]][npm-link]

A personal tinyurl service.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/215282/18083956/fd563db8-6ed7-11e6-955a-a107699cbd38.jpg" /><br/>
  <i>Now go, let the legend come back to life!</i>
</p>

## Features

- Simple tinyurl service (in 100 lines).
- Semi-auto update by a [remote config](#remote-config).
- Three types of routes:
  - redirect to an url
  - echo a string
  - proxy mode

## Getting Started

```bash
git clone --depth 1 git@github.com:amio/now-go.git
cd now-go

# set up your redirection mapping in config.json
vim config.json

# run locally
node cli.js -c config.json

# or deploy to now.sh (perfect for a tinyurl service).
now
```

That's it! Your tinyurl is online now.

Further more, you can set a shorten alias:

```bash
now alias set api-ownv3nc9f8.now.sh my-api.now.sh
```

If you don't have `now` yet, `npm install -g now`.
Don't miss this awesome tool for [realtime global deployments][now].

## Live Example

The config for https://go.now.sh (All configuration are optional):

```javascript
{
  "routes": {
    // redirection (<value> is a url)
    "home": "https://github.com/amio/now-go",
    // proxy mode (<value> is a url prefixed with "PROXY >> ")
    "myip": "PROXY >> https://httpbin.org/ip",
    // echo a string (<value> is a string)
    "hello": "Hi there!",

    // special route for root path (<key> === "/")
    "/": "Now go, let the legend come back to life!",
    // special route for unmatched path: (<key> === "?")
    "?": "What are you looking for"
  },
  "port": 3000
}
```

See it live:

- https://go.now.sh/home
- https://go.now.sh/myip
- https://go.now.sh/hello
- https://go.now.sh/
- https://go.now.sh/oops

## Remote Config

1. Instead of `node cli.js -c config.json`, start server with:
```
node cli.js -c https://example.com/path-to-config.json
```

2. Visit your server's root path(the sepcial route "/") will trigger an update task in background -- so called "semi-auto update" :P

## License

[MIT][mit] © [Amio][author]

[now]:      https://zeit.co/now
[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
