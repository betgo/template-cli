const path = require('path')
const fs = require('fs')
let p = process.cwd()+'/template'
fileDisplay(p)

/** 
 * 文件遍历方法 
 * @param filePath 需要遍历的文件路径 
 */  

function fileDisplay(filePath){
    fs.readdir(filePath,function(err,files){  
        if(err){  
            console.warn(err)  
        }else{  
            //遍历读取到的文件列表  
            files.forEach(function(filename){  
                //获取当前文件的绝对路径  
                var filedir = path.join(filePath,filename);  
                //根据文件路径获取文件信息，返回一个fs.Stats对象  
                fs.stat(filedir,function(eror,stats){  
                    if(eror){  
                        console.warn('获取文件stats失败');  
                    }else{  
                        var isFile = stats.isFile();//是文件  
                        var isDir = stats.isDirectory();//是文件夹  
                        if(isFile){                
                            
                        }  
                        if(isDir){  
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
                        }  
                    }  
                })  
            });  
        }  
    });  

}

function copyTemplate(fo,to){
    //console.log(to);
    if(process.argv[2]){
        // 返回相对于目录的位置
        to = path.resolve( process.argv[2])+'/'+to
    }
    fs.writeFileSync(to,fs.readFileSync(fo))
}

module.exports = ()=>{
    let p = process.cwd()+'/template'

}