const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const program = require('commander');
module.exports = ()=>{
    // console.log(process.argv)

    let arguments = process.argv;
    if(arguments.length<5)
    {
        console.log(chalk.red('请填写地址 和 文件名'))
        return;
    }
    let dir = path.resolve(process.cwd(),arguments[3]);
    console.log(dir);
    // 地址存在
    try {
        fs.accessSync(dir,fs.constants.F_OK)
    } catch (error) {
        console.log(chalk.red('文件地址不存在'))
        return;
    }
    var template = fs.readFileSync(__dirname+'/../_template/component/%name%_component','utf-8');
    template = template.replace(/%name%/g,arguments[4])
    // console.log(template);
    fs.writeFileSync(dir+'/'+arguments[4]+'.tsx',template);

}