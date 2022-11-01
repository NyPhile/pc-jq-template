# PC-JQ模板

![version](https://img.shields.io/github/package-json/v/hejingmiao/pc-jq-template.svg)
![commit](https://img.shields.io/github/last-commit/hejingmiao/pc-jq-template.svg)
![new feature](https://img.shields.io/badge/author-hejingmiao-orange)

<!-- ![code-size](https://img.shields.io/github/languages/code-size/hejingmiao/pc-jq-template.svg) -->
<!-- ![lang](https://img.shields.io/github/languages/top/hejingmiao/pc-jq-template.svg) -->

### 开发
```html
<!-- 添加cms_id，「0001」频道ID依据创建项目时的频道名,「xxxx」为发布器对应频道新建专题名，需要发布到发布器的项目，该项必填 -->
<meta name="cms_id" content="0001xxxx" />
<!-- 公共导航头 -->
<!--#include virtual="/special/ntes_common_model/nte_commonnav2019.html" -->
<!-- 频道导航头 -->
<!--#include virtual="/special/sp/post_1603_header.html" -->
```
### 安装

```bash
$ npx ne-build pc
# node版本大于5.2
# 参数可在命令行输入，也可以输入命令后按交互提示输入

# 参数⬇️
-n or --name
# 项目名称，必须
# 用于替换模板项目中package.json的{name}

-c or --channel
# 频道名称，必须
# 用于替换模板项目内上传路径中的频道路径

-t or --template
# 项目模版，必须

-d or --desc
# 项目描述，可选
# 用于替换模板项目中package.json的{description}

--username
# 用户名

--password
# 密码
```

### 用户配置
```js
// gulpfile.js
const account = require('/Users/xxx/code/openID') // 配置路径
```

### 命令
```bash
# 安装依赖
$ npm i

# 开启本地服务
$ npm run dev

# 初始化openid（只需执行一次）
$ npm run initopenid

# 打包（上传前需先打包）
$ npm run build

# 上传静态资源
$ npm run upload

# 发布cms
$ npm run publish

# 打包+上传+发布+git提交
npm run submit
```

### 目录结构

```
├── CHANGELOG.md
├── README.md
├── babel.config.js             # babel配置文件
├── config/
├── openID.json                 # 上传账号密码文件
├── package-lock.json
├── package.json
├── postcss.config.js           # postcss配置文件
├── script                      # webpck配置、上传发布脚本、初始化openID脚本
|  ├── init-openid.js
|  ├── publish.js
|  ├── upload-tools.js
|  ├── upload.js
|  ├── webpack.base.config.js
|  ├── webpack.dev.config.js
|  └── webpack.prod.config.js
├ src/
│  ├ assets/               # 图片等资源文件夹
│  ├ css/
│  │  ├ common.less        # 公用reset css
│  │  └ index.less         # 样式文件
│  ├ js/
│  │  ├ utils/             # 工具js文件夹
│  │  │  ├ helper.js       # eruda、统计js
│  │  │  ├ track.js        # 统计方法
│  │  │  └ utils.js        # 工具函数
│  │  ├ common.js          # 通用js
│  │  └ index.js           # js文件
├ static/                  # 静态资源文件夹
└── share-icon.png
```
### 简介

* 项目使用webpack打包，webpack-dev-server开启本地服务
* html默认使用.html，可按照[html-webpack-plugin文档](https://github.com/jantimon/html-webpack-plugin)根据需求自行配置模板文件。
* css默认使用[less](http://lesscss.org/)以及[postcss](https://postcss.org/)
* js使用[babel7.5](https://babeljs.io/)进行编译，按照package.json中的browserslist自动增加polyfill
* eslint使用默认标准，[规则](https://eslint.org/docs/rules/)
* 统计ID位于`package.json`的`projectId`字段
* 已内置`jQuery`，版本`v3.4.1`index.html中引入js，webpack.externals进行排除）
* npm run dev开启本地服务后，可以使用localhost:8080或{ip}:8080或dev.f2e.163.com:8080（需配置hosts）调试
* 打包时静态资源默认添加hash，上传后进行缓存，无修改不再重复上传
* 如需引用频道include，需要再webpack.dev.config.js中59行修改频道域名