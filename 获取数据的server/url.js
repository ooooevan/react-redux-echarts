/**
 * Created by HH on 2016/9/13.
 */
//引入模块
var http=require("http");
var urls=require("url");
var util=require("util");
http.createServer(function (req, res) {
    //res.writeHead(200,{"Content-Type":"text/plain"});
    res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
    //解析并打成字符串形式返回给客户端
    //为true时query封装成一个对象
    function randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
    var str='\\u'+(Math.round(Math.random() * 2090) + 1968+'').toString(16)+"";
    str = eval("'" + str + "'");
    res.write(JSON.stringify({name:str}));
    res.end();
    //res.end(util.inspect(urls.parse(req.url,true)));

}).listen(3003);