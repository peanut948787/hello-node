const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async(request, response)=>{
    console.log(request.url)
    let path = request.url;

    response.setHeader("Content-Type", "text/html;charset=UTF-8")
    switch(path) {
        case "/":
            response.end("this is home首頁");
            break;
        case "/member":
            let htmlContent = await fs.readFile("member.html", "UTF-8");
            response.end(htmlContent);
            break;
        default:
            response.statusCode= 404;
            response.end("Not Found");
            break;
    }
})

server.listen(3005, ()=>{
    console.log("web server initiated at port3005")
})