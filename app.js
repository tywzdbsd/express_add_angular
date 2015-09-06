//直接返回html格式的文件能显示吗？能
var express = require('express');
var fs = require('fs'); // 此模板引擎依赖 fs 模块
var app = express();

app.engine('html', function (filePath, options, callback) { // 定义模板引擎
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    // 这是一个功能极其简单的模板引擎
    var rendered = content.toString().replace('#title#', '<title>'+ options.title +'</title>')
    .replace('#message#', '<h1>'+ options.message +'</h1>');
    return callback(null, rendered);
  })
});

app.set('views', 'views'); // 指定视图所在的位置
app.set('view engine', 'html'); // 注册模板引擎

app.use(express.static('views'));

app.get('/vk/index',function(req,res){
	res.render('./vk/index',{title:'nice',message:'yz  html page'});
});

app.get('/',function(req,res){
	res.send('vkhim here!');
});

var server = app.listen(3001,function(req,res){
	console.log('start server in '+server.address().port);
});