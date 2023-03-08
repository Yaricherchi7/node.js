const fs = require("fs")

 fs.writeFile('message.txt','hello node.js!',{encoding: "utf-8"},(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("file is created")
    }
 })