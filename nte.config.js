const account = require('D:/code/openID.json')

const project = 'pc-jq-template'
const upPath = `f2e/${project}`

module.exports = {
  entry: '*.html', // or an array exp: ['./a.html', './module/b.html', './11/*.html']
  output: {
    cdnPath: `https://static.ws.126.net/163/${upPath}/`,
    clean: true // whether remove existing file in dist folder, before each building
  },
  svnRoot: '/Users/hejingmiao/frontend', // setting svn root dir for compatible with absolute paths of previous projects
  log: false,
  image: {
    base64: 1000 // less than 1000 byte, would convert to base64 url
  },
  upload: {
    username: account.username,
    password: account.password,
    path: upPath,
    includeHtml: false,
    exclude: [],
    // otppwd: '754335' // netease token is used in outer network env
  },
  api: {
    cms: account.cms
  }
}