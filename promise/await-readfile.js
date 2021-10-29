//module.exports = exports = {}

const fs = require("fs");

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("input2.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

(async () => {
  try {
    let data = await readFilePromise();
    console.log(data);
  } catch {
    console.log("banana");
  }
})();



// try{

// } catch{

// } finally {
    
// }


// return module.exports