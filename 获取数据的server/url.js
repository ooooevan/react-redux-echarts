/**
 * Created by HH on 2016/9/13.
 */
//引入模块
var http=require("http");
var urls=require("url");
var util=require("util");
http.createServer(function (req, res) {
    switch(req.url){
      case "/":
        //res.writeHead(200,{"Content-Type":"text/plain"});
        res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        //解析并打成字符串形式返回给客户端
        //为true时query封装成一个对象
        // function randomString(len) {
        //     len = len || 32;
        //     var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        //     var maxPos = $chars.length;
        //     var pwd = '';
        //     for (i = 0; i < len; i++) {
        //         pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        //     }
        //     return pwd;
        // }
        // var str='\\u'+(Math.round(Math.random() * 2090) + 1968+'').toString(16)+"";
        // str = eval("'" + str + "'");

        var sellers=`
        {
            "sellers":[{
                    "seller":"一号店",
                    "id":"1111"
                },{
                    "seller":"淘宝",
                    "id":"2222"

                },{
                    "seller":"122",
                    "id":"333"

                },{
                    "seller":"222",
                    "id":"44445"

                },{
                    "seller":"赶集网",
                    "id":"555"

                },{
                    "seller":"987",
                    "id":"666"

                },{
                    "seller":"LVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
                    "id":"77"

                },{
                    "seller":"GV",
                    "id":"88"

                },{
                    "seller":"GV",
                    "id":"99"

                }]
        }
        `


        res.write(sellers);
        res.end();
        break;
        //res.end(util.inspect(urls.parse(req.url,true)));
      case "/allsellers":
      res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        var sellers=`
        {
            "sellers":[{
                    "seller":"一号店",
                    "num":"4321",
                    "percent":2
                },{
                    "seller":"淘宝",
                    "num":"2142",
                    "percent":3

                },{
                    "seller":"122",
                    "num":"4351",
                    "percent":-0.3

                },{
                    "seller":"222",
                    "num":"2142",
                    "percent":1

                },{
                    "seller":"赶集网",
                    "num":"1421",
                    "percent":-1

                },{
                    "seller":"987",
                    "num":"5232",
                    "percent":-0.2

                },{
                    "seller":"q",
                    "num":"4314",
                    "percent":-2

                },{
                    "seller":"GV",
                    "num":"3241",
                    "percent":0.2

                },{
                    "seller":"GV",
                    "num":"4324",
                    "percent":1

                }]
        }
        `
        res.write(sellers);
        res.end();

        break;
    }
}).listen(3003);