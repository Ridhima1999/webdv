var express = require('express');
var app = express();
app.use(express.static(__dirname+'/frontend'))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
})
app.get('/resume',function(req,res){
    res.sendFile(__dirname+'/frontend/html/resume.html')
})
app.get('/canvas',function(req,res){
    res.sendFile(__dirname+'/frontend/html/canvas.html')
})
app.get('/snake',function(req,res){
    res.sendFile(__dirname+'/frontend/html/snake.html')
})

    



var port= process.env.PORT||3002;
app.listen(port,function(){
    console.log('site running on http:/localhost:'+port)
});