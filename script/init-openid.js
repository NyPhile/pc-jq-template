/*
 * @Author: wanghaiyan
 * @Date: 2022-01-14 15:06:25
 * @LastEditTime: 2022-02-08 11:34:51
 * @LastEditors: wanghaiyan
 */
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

(async function run() {
  const target = path.join(__dirname, '../openID.json')
  if (!fs.existsSync(target)) {
    console.log('不存在' + target + '配置文件，准备生成..')
    const username = (await inquirer.prompt({name: 'user',message:'输入邮箱前缀'})).user
    const password = (await inquirer.prompt({ name: 'pwd', message: '输入openid密码', type:'password'})).pwd
    const config = {
      username,
      password,
      "cms": {
        "pc": {
          "url": "https://newcms.ws.netease.com/openapi/handleModelData",
          "params": "target=model&userid=f2e&password=abc%231234&extname=.html"
        },
        "_3g": {
          "url": "https://3gcms.ws.netease.com/cms/model/updateContent.do",
          "params": "target=model&userid=xqwei&password=D0erwxpw!!"
        }
      },
      otppwd: "将军令(外网环境下)"
    }
    fs.writeFileSync(target, JSON.stringify(config, null, 2));
    console.log('生成openID.json在' + target)
  }

}())