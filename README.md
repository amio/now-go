# now-go [![npm-version][npm-badge]][npm-link]

Deploy a personal tinyurl service to [now.sh][now] in 1 minute.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/215282/18083956/fd563db8-6ed7-11e6-955a-a107699cbd38.jpg" /><br/>
  <i>Now go, let the legend come back to life!</i>
</p>

## Usage

```bash
# get the code
git clone --depth 1 git@github.com:amio/now-go.git

# set up your redirection mapping in config.json
vim now-go/config.json

# deploy to now.sh
now now-go
```

That's it!

And further more, you can set a shorten alias:

```bash
now alias set api-ownv3nc9f8.now.sh my-api.now.sh
```

If you don't have `now` yet, `npm install -g now`.
Don't miss this awesome tool for
[realtime global deployments][now].

## Live Example

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

[now]:      https://zeit.co/now
[npm-badge]:https://img.shields.io/npm/v/now-go.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/now-go
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
