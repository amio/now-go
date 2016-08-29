# now-go [![npm-version][npm-badge]][npm-link]

> Now go, let the legend come back to life!

Deploy a personal tinyurl service to [now.sh](https://zeit.co/now/) in 1 minute:

```bash
# get the code
git clone git@github.com:amio/now-go.git

# set up your redirection mapping in config.json
vim now-go/config.json

# deploy to now.sh
now now-go
```

If you don't have `now` yet, `npm install -g now`. An awesome tool for
[realtime global deployments](https://zeit.co/now/).

### Live Example

The config for https://go.now.sh:

```json
{
  "routes": {
    "home": "https://github.com/amio/now-go",
    "author": "https://github.com/amio",
    "/": "Now go, let the legend come back to life!",
    "?": "What are you looking for"
  },
  "port": 3000
}
```

See it live:

- https://go.now.sh/home
- https://go.now.sh/author
- https://go.now.sh/
- https://go.now.sh/oops

### License

[MIT][mit] © [Amio][author]

[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
