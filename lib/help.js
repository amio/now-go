module.exports = function () {
  const help = `
    USAGE

        now-go -c <config-file>

        -c  JSON config file path or url
        -v  Show version
        -h  Show this help message

    CONFIG FILE EXAMPLE

        {
          "routes": {
            "home": "https://github.com/amio/now-go",
            "myip": "PROXY >> https://httpbin.org/ip",
            "/": "Yet another tinyurl service",
            "?": "What are you looking for"
          },
          "port": 3000
        }
  `

  console.log(help)
}
