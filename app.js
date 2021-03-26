const http=require('http');

var dt= require('./myfisrtmodule')

http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/plain '})
    res.end("hello world\n today is "+ dt.giveDate())


}



).listen(8080,()=>{

    console.log("the server is running on port 8080")
})