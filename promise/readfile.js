const fs = require("fs");

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("banana occur", err);
//   } else {
//     console.log("data get", data);
//   }
// });

function readFilePromise () {
    return new Promise ((resolve,reject)=>{
        fs.readFile("input.txt", "utf-8", (err,data)=>{
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readFilePromise().then((data)=>console.log("success! "+data)).catch(err=> console.log("failed! " + err))

