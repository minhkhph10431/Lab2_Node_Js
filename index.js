var http = require('http');
// var cal = require('./Cal.js')
var fs = require('fs');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // var  tong = cal.tinhTong(5,7);
    var url = req.url;
    if (url == '/'){

        fs.readFile('index.html',function (error,data){
            console.log("jhdgbcjgfb")
            if (!error){
                res.write(data);
                res.end();
            }else {
                res.end('404 not found');
            }
        });
    }
    else if(url == '/insert'){
        console.log('are you ok !!')
        fs.writeFile('test.txt','Hello, Wellcom',function (error){
            if(!error)
                res.end("Insert thanh cong are you ok!!")
        });

    }
    else if(url == '/delete'){
        fs.unlink('test.txt',function (error){
            if(!error)
                res.end("Delete thanh cong roi ban tre oi")
            else {
                res.end(error);
            }
        });

    }
    else if(url == '/update'){
        fs.appendFile('test.txt','Helloo viet nam',function (error){
            if(!error)
                res.end("Ban da update thanh cong chuong trinh hack ")
        });
    }else if(url =='/rename'){
        fs.rename('test.txt','testDemo.txt',function (error){
            if(!error)
                res.end("Ban da rename thanh cong")
            else {
                res.end("Ban deo the rename ban ngu vl!!"+error)
            }
        });
    }

}).listen(8000);