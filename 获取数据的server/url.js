/**
 * Created by HH on 2016/9/13.
 */
//引入模块
var http=require("http");
var urls=require("url");
var util=require("util");
http.createServer(function (req, res) {
    console.log(req.url);
    switch(req.url){
      case "/":
        //res.writeHead(200,{"Content-Type":"text/plain"});
        res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        //解析并打成字符串形式返回给客户端
        //为true时query封装成一个对象
        // function randomString(len) {
        //     len = len || 32;
        //     var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        //     var maxPos = $chars.length;
        //     var pwd = "";
        //     for (i = 0; i < len; i++) {
        //         pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        //     }
        //     return pwd;
        // }
        // var str="\\u"+(Math.round(Math.random() * 2090) + 1968+"").toString(16)+"";
        // str = eval(""" + str + """);

        var sellers=`
        [{
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
        `
        let sellerss=`
            ["商家一","商家二","商家三","商家四","商家五","商家六"]
        `

        res.write(sellerss);
        res.end();
        break;
        //res.end(util.inspect(urls.parse(req.url,true)));
      case "/allsellers/:time/:page":
      res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        var sellers=`
      [{
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

                }]
        `
        res.write(sellers);
        res.end();

        break;
        case "/allsellers/2":
      res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        var sellers=`
      [{
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

                }]
        `
        res.write(sellers);
        res.end();

        break;
        case "/allsellers/3":
      res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        var sellers=`
      [{
                    "seller":"三号店",
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
                    "lastPage":"true"
                }]
        `
        res.write(sellers);
        res.end();

        break;
    // case "/singleSeller/:id/hour":  //根据商家id获取对应的数据
    //     console.log("-----")
    //   res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
    //     var seller=`{
    //         "name":"淘宝",
    //         "value":[{
    //             "time":"12:21:08",
    //             "num":652,
    //             "percent":3
    //         },{
    //             "time":"12:21:31",
    //             "num":623,
    //             "percent":2.4
    //         },{
    //             "time":"12:22:11",
    //             "num":626,
    //             "percent":2.8
    //         }
    //         ,{
    //             "time":"12:23:31",
    //             "num":553,
    //             "percent":2
    //         }
    //         ,{
    //             "time":"12:27:31",
    //             "num":674,
    //             "percent":4
    //         }
    //         ,{
    //             "time":"12:31:31",
    //             "num":632,
    //             "percent":2.4
    //         }
    //         ,{
    //             "time":"12:43:31",
    //             "num":613,
    //             "percent":2
    //         },{
    //             "time":"13:21:31",
    //             "num":623,
    //             "percent":2.4
    //         },{
    //             "time":"13:22:11",
    //             "num":626,
    //             "percent":2.8
    //         }
    //         ,{
    //             "time":"13:23:31",
    //             "num":553,
    //             "percent":2
    //         }
    //         ,{
    //             "time":"13:27:31",
    //             "num":674,
    //             "percent":4
    //         }
    //         ,{
    //             "time":"13:31:31",
    //             "num":632,
    //             "percent":2.4
    //         }
    //         ,{
    //             "time":"13:43:31",
    //             "num":613,
    //             "percent":2
    //         }]

    //     }`
    //     res.write(sellers);
    //     res.end();

    //     break;
      case "/allsellers/allSellersTableInit":
        res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
            var table= `
            [
              {
                "name":"淘宝",
                "num":"590",
                "increase":"false",
                "percent":"2"
              },{
                "name":"2eee",
                "num":"510",
                "increase":"true",
                "percent":"2"
                },{
                "name":"eva",
                "num":"210",
                "increase":"true",
                "percent":"1"
                },{
                "name":"ooo",
                "num":"410",
                "increase":"true",
                "percent":"2"
                },{
                "name":"vcx",
                "num":"234",
                "increase":"false",
                "percent":"1"
                },{
                "name":"囧妃的",
                "num":"510",
                "increase":"true",
                "percent":"2"
                },{
                "name":" 是",
                "num":"210",
                "increase":"true",
                "percent":"1"
                },{
                "name":"GRE",
                "num":"410",
                "increase":"true",
                "percent":"2"
                },{
                "name":"safe",
                "num":"234",
                "increase":"false",
                "percent":"1"
                }]
            `;
             res.write(table);
             res.end();
            break;
    }
}).listen(3003);