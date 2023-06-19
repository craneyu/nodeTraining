
// 載入 Express 模組
const express=require('express');

//建立 application 物件
const app=express();
// 將靜態檔案名稱對應到網址
app.use(express.static('public'));

//設定路由
app.get('/', function(req, res){
    //Request Object : req
    // console.log(req.hostname);
    // console.log(req.protocol);
    // console.log(req.path);
    // console.log(req.get('User-Agent'));
    // console.log(req.get('accept-language'));
    // const lang=req.get('accept-language');
    // if  (lang.includes('zh-TW')){
    //     res.send('你好');    
    // }
    // else{
    //     res.send('Hello World');
    // }

    //res.send('Hello World');
});

app.get('/about', function(req, res){

    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let Sum = a+b;
    res.send('About Page is SUM :' + Sum);

});

// 啟動測試伺服器網址: http://localhost:3000
app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000');
});