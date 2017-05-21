var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//      res.render('index', { title: 'Express' });
// });
router.get("/statisticsCustomerNumInit/:time", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});

	var data =`
				[{
            "countDate":"12:21:08",
            "incrementNum":652,
            "percent":3
        },{
            "countDate":"12:21:31",
            "incrementNum":623,
            "percent":2.4
        },{
            "countDate":"12:22:11",
            "incrementNum":626,
            "percent":2.8
        },{
            "countDate":"12:23:31",
            "incrementNum":553,
            "percent":2
        },{
            "countDate":"12:27:31",
            "incrementNum":674,
            "percent":4
        },{
            "countDate":"12:31:31",
            "incrementNum":632,
            "percent":2.4
        },{
            "countDate":"12:43:31",
            "incrementNum":613,
            "percent":2
        },{
            "countDate":"13:21:31",
            "incrementNum":623,
            "percent":2.4
        },{
            "countDate":"13:22:11",
            "incrementNum":626,
            "percent":2.8
        },{
            "countDate":"13:23:31",
            "incrementNum":553,
            "percent":2
        }]
`
	res.write(data);
	res.end();
});
router.get("/singleSellerCycleInit/:id/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
        [{
            "key":"初次",
            "value":"414",
            "isNewRecord":false
        },{
            "key":"昨日",
            "value":"627",
            "isNewRecord":false
        },{
            "key":"前日",
            "value":"1449",
            "isNewRecord":false
        },{
            "key":"一周前",
            "value":"782",
            "isNewRecord":false
        },{
            "key":"半月前",
            "value":"582",
            "isNewRecord":false
        },{
            "key":"一月前",
            "value":"219",
            "isNewRecord":false
        }]
`
    res.write(data);
    res.end();
});
router.get("/statisticsCycleInit/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });

    var data =`
        [{
            "key":"初次",
            "value":"414"
        },{
            "key":"昨日",
            "value":"627"
        },{
            "key":"前日",
            "value":"1449"
        },{
            "key":"一周前",
            "value":"782"
        },{
            "key":"半月前",
            "value":"582"
        },{
            "key":"一月前",
            "value":"219"
        }]
`
    res.write(data);
    res.end();
});
router.get("/singleSellerActiveInit/:id/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
        [{
            "key":"高活跃度",
            "value":"782"
        },{
            "key":"中活跃度",
            "value":"1449"
        },{
            "key":"低活跃度",
            "value":"627"
        },{
            "key":"沉睡活跃度",
            "value":"414"
        }]
`
    res.write(data);
    res.end();
});
router.get("/statisticsActiveInit/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
        [{
            "key":"高活跃度",
            "value":"782"
        },{
            "key":"中活跃度",
            "value":"1449"
        },{
            "key":"低活跃度",
            "value":"627"
        },{
            "key":"沉睡活跃度",
            "value":"414"
        }]
`
    res.write(data);
    res.end();
});
router.get("/statisticsStayInit/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
        [{
            "key":"10分钟内",
            "value":"782"
        },{
            "key":"30分钟内",
            "value":"1449"
        },{
            "key":"一小时内",
            "value":"627"
        },{
            "key":"2小时内",
            "value":"414"
        },{
            "key":"3小时内",
            "value":"414"
        },{
            "key":"3小时以上",
            "value":"414"
        }]
`
    res.write(data);
    res.end();
});
router.get("/statisticsAvgInit/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data1 =`
        [{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        }]
`
    var data2 =`
        [{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        }]
`
    if(Math.random() > 0.5){
        data1=data2
    }
    res.write(data1);
    res.end();
});
router.get("/statisticsPeakInit/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data1 =`
        [{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12 04:32:42",
            "customerNumber":634,
            "isNewRecord":false
        }]
`
    var data2 =`
        [{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        },{
            "countDate":"2017-04-12",
            "customerNumber":634,
            "isNewRecord":false
        }]
`
    if(Math.random() > 0.5){
        data1=data2
    }
    res.write(data1);
    res.end();
});
router.get("/allsellers/:time/3", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
            [{
                    "incrementNum":2311,
                    "momPercent":"17",
                    "shopName":"taobao"
                },{
                    "incrementNum":1341,
                    "momPercent":"12",
                    "shopName":"kfc"
                },{
                    "incrementNum":1321,
                    "momPercent":"-4",
                    "shopName":"987"
                },{
                    "shopName":"1222",
                    "incrementNum":242,
                    "momPercent":"1"
                },{
                    "shopName":"赶集网",
                    "incrementNum":421,
                    "momPercent":"-1"
                },{
                    "shopName":"987",
                    "incrementNum":232,
                    "momPercent":"-0.2"
                },{
                    "shopName":"q",
                    "incrementNum":431,
                    "momPercent":"-2"
                },{
                    "shopName":"GV",
                    "incrementNum":1241,
                    "momPercent":"0.2"
                },{
                    "shopName":"GV",
                    "incrementNum":324,
                    "momPercent":"1"
                },{
                    "shopName":"222",
                    "incrementNum":465,
                    "momPercent":"1"
                },{
                    "shopName":"赶集网",
                    "incrementNum":421,
                    "momPercent":"-1"
                },{
                    "shopName":"987",
                    "incrementNum":1532,
                    "isLastPage":"true",
                    "momPercent":"-0.2"
                }]
`

    res.write(data);
    res.end();
});
router.get("/allsellers/:time/:page", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
            [{
                    "incrementNum":231,
                    "momPercent":"7",
                    "shopName":"taobao"
                },{
                    "incrementNum":341,
                    "momPercent":"2",
                    "shopName":"kfc"

                },{
                    "incrementNum":321,
                    "momPercent":"-4",
                    "shopName":"987"

                },{
                    "shopName":"222",
                    "incrementNum":242,
                    "momPercent":"1"

                },{
                    "shopName":"赶集网",
                    "incrementNum":421,
                    "momPercent":"-1"

                },{
                    "shopName":"987",
                    "incrementNum":232,
                    "momPercent":"-0.2"

                },{
                    "shopName":"q",
                    "incrementNum":431,
                    "momPercent":"-2"

                },{
                    "shopName":"GV",
                    "incrementNum":241,
                    "momPercent":"0.2"

                },{
                    "shopName":"GV",
                    "incrementNum":324,
                    "momPercent":"1"

                },{
                    "shopName":"222",
                    "incrementNum":465,
                    "momPercent":"1"

                },{
                    "shopName":"赶集网",
                    "incrementNum":421,
                    "momPercent":"-1"

                },{
                    "shopName":"987",
                    "incrementNum":532,
                    "momPercent":"-0.2"

                }]
`
    var data =`
            [{
                    "incrementNum":2311,
                    "momPercent":"17",
                    "shopName":"taobao"
                },{
                    "incrementNum":1341,
                    "momPercent":"12",
                    "shopName":"kfc"
                },{
                    "incrementNum":1321,
                    "momPercent":"-4",
                    "shopName":"987"
                },{
                    "shopName":"1222",
                    "incrementNum":242,
                    "momPercent":"1"
                },{
                    "shopName":"赶集网",
                    "incrementNum":421,
                    "momPercent":"-1"
                },{
                    "shopName":"987",
                    "incrementNum":232,
                    "momPercent":"-0.2"
                },{
                    "shopName":"q",
                    "incrementNum":431,
                    "momPercent":"-2"
                },{
                    "shopName":"GV",
                    "incrementNum":1241,
                    "momPercent":"0.2"
                },{
                    "shopName":"GV",
                    "incrementNum":324,
                    "momPercent":"1"
                },{
                    "shopName":"222",
                    "incrementNum":465,
                    "momPercent":"1"
                },{
                    "shopName":"赶集网",
                    "incrementNum":421,
                    "momPercent":"-1"
                },{
                    "shopName":"987",
                    "incrementNum":1532,
                    "momPercent":"-0.2"
                }]
`
    res.write(data);
    res.end();
});

router.get("/allsellers?:time&3", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
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

                },{
                    "lastPage":"true"
                }]
`
    res.write(data);
    res.end();
});
router.get("/numInInit/:time/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    if(req.params.range === 'day'){

    }
    var data =`{
        "2017-01-01":[{
            "countDate":"2017-01-01",
            "incrementNum":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "incrementNum":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "incrementNum":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "incrementNum":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-01",
            "incrementNum":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "incrementNum":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "incrementNum":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "incrementNum":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-01",
            "incrementNum":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "incrementNum":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "incrementNum":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "incrementNum":632,
            "isNewRecord":false
            }],
        "2017-01-08":[{
            "countDate":"2017-01-08",
            "incrementNum":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "incrementNum":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "incrementNum":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "incrementNum":642,
            "isNewRecord":false
            },{
            "countDate":"2017-01-08",
            "incrementNum":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "incrementNum":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "incrementNum":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "incrementNum":642,
            "isNewRecord":false
            },{
            "countDate":"2017-01-08",
            "incrementNum":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "incrementNum":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "incrementNum":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "incrementNum":642,
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/numAvgInit/:time/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    if(req.params.range === 'day'){

    }
    var data =`{
        "2017-01-01":[{
            "countDate":"2017-01-01",
            "customerNumber":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "customerNumber":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "customerNumber":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-01",
            "customerNumber":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "customerNumber":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "customerNumber":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-01",
            "customerNumber":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "customerNumber":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "customerNumber":632,
            "isNewRecord":false
            }],
        "2017-01-08":[{
            "countDate":"2017-01-08",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "customerNumber":642,
            "isNewRecord":false
            },{
            "countDate":"2017-01-08",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "customerNumber":642,
            "isNewRecord":false
            },{
            "countDate":"2017-01-08",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "customerNumber":642,
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/compareCustomerNum/:time/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    if(req.params.range === 'day'){

    }
    var data =`{
        "2017-01-01":[{
            "countDate":"2017-01-01",
            "customerNumber":622,
            "isNewRecord":false
            },{
            "countDate":"2017-01-02",
            "customerNumber":632,
            "isNewRecord":false
            },{
            "countDate":"2017-01-03",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-04",
            "customerNumber":632,
            "isNewRecord":false
            }],
        "2017-01-08":[{
            "countDate":"2017-01-08",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-09",
            "customerNumber":612,
            "isNewRecord":false
            },{
            "countDate":"2017-01-10",
            "customerNumber":652,
            "isNewRecord":false
            },{
            "countDate":"2017-01-11",
            "customerNumber":642,
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerCycleInit/:time/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "2017-02-01":[{
            "key":"一天以内",
            "value":322
            },{
            "key":"三天以内",
            "value":502
            },{
            "key":"一周以内",
            "value":732
            },{
            "key":"一月以内",
            "value":672
            },{
            "key":"一月以上",
            "value":531
            }],
        "2017-02-02":[{
            "key":"一天以内",
            "value":321
            },{
            "key":"三天以内",
            "value":552
            },{
            "key":"一周以内",
            "value":752
            },{
            "key":"一月以内",
            "value":642
            },{
            "key":"一月以上",
            "value":549
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerActiveInit/:id/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "2017-02-12":[{
            "key":"沉睡活跃度",
            "value":622
            },{
            "key":"低活跃度",
            "value":632
            },{
            "key":"中活跃度",
            "value":612
            },{
            "key":"高活跃度",
            "value":632
            }],
        "2017-02-15":[{
            "key":"沉睡活跃度",
            "value":621
            },{
            "key":"低活跃度",
            "value":652
            },{
            "key":"中活跃度",
            "value":612
            },{
            "key":"高活跃度",
            "value":652
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerStayInit/:id/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "2017-02-12":[{
            "key":"10分钟内",
            "value":622
            },{
            "key":"30分钟内",
            "value":632
            },{
            "key":"1小时内",
            "value":612
            },{
            "key":"2小时内",
            "value":632
            },{
            "key":"3小时内",
            "value":652
            },{
            "key":"3小时以上",
            "value":612
            }],
        "2017-02-15":[{
            "key":"10分钟内",
            "value":621
            },{
            "key":"30分钟内",
            "value":652
            },{
            "key":"1小时内",
            "value":612
            },{
            "key":"2小时内",
            "value":652
            },{
            "key":"3小时内",
            "value":652
            },{
            "key":"3小时以上",
            "value":612
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerDeepVisitInit/:time/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "fdsa":[{
            "countDate":"2014-2-1",
            "jumpNum":3,
            "deepNum":2,
            "deepRatio":"3.1",
            "jumpRatio":"22"
            },{
            "countDate":"2014-3-1",
            "jumpNum":3,
            "deepNum":2,
            "deepRatio":"3.1",
            "jumpRatio":"14"
            },{
            "countDate":"2014-5-1",
            "jumpNum":3,
            "deepNum":2,
            "deepRatio":"3.2",
            "jumpRatio":"11"
            },{
            "countDate":"2015-1-2",
            "jumpNum":3,
            "deepNum":2,
            "deepRatio":"3.4",
            "jumpRatio":"12"
            }],
        "data2":[{
            "countDate":"2014-2-1",
            "jumpNum":34,
            "deepNum":21,
            "deepRatio":"3.3",
            "jumpRatio":"14"
            },{
            "countDate":"2014-3-1",
            "jumpNum":33,
            "deepNum":42,
            "deepRatio":"3.1",
            "jumpRatio":"11"
            },{
            "countDate":"2014-5-1",
            "jumpNum":33,
            "deepNum":12,
            "deepRatio":"3.5",
            "jumpRatio":"22"
            },{
            "countDate":"2015-1-2",
            "jumpNum":1,
            "deepNum":5,
            "deepRatio":"3.6",
            "jumpRatio":"11"
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/statisticsDeepInit/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`[{
            "countDate":"2014-2-1",
            "jumpNum":34,
            "deepNum":21,
            "deepRatio":"3.3",
            "jumpRatio":"1.4"
            },{
            "countDate":"2014-3-1",
            "jumpNum":33,
            "deepNum":42,
            "deepRatio":"3.1",
            "jumpRatio":"11.1"
            },{
            "countDate":"2014-5-1",
            "jumpNum":33,
            "deepNum":12,
            "deepRatio":"3.5",
            "jumpRatio":"22.1"
            },{
            "countDate":"2015-1-2",
            "jumpNum":1,
            "deepNum":5,
            "deepRatio":"3.6",
            "jumpRatio":"11.1"
            }]
`
    res.write(data);
    res.end();
});
router.get("/customerOutInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "data1":[{
            "time":"2014-2-1",
            "percent":12
            },{
            "time":"2014-3-1",
            "percent":21
            },{
            "time":"2014-5-1",
            "percent":12
            },{
            "time":"2015-1-2",
            "percent":18
            }],
        "data2":[{
            "time":"2014-2-1",
            "percent":13
            },{
            "time":"2014-3-1",
            "percent":12
            },{
            "time":"2014-5-1",
            "percent":15
            },{
            "time":"2015-1-2",
            "percent":12
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerOldOrNewInit/:time/:range", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "2017-01-21":[{
            "countDate":"2014-02-01",
            "newCustomer":12,
            "oldCustomer":32,
            "isNewRecord":false
            },{
            "countDate":"2014-03-02",
            "newCustomer":11,
            "oldCustomer":22,
            "isNewRecord":false
            },{
            "countDate":"2014-05-03",
            "newCustomer":12,
            "oldCustomer":32,
            "isNewRecord":false
            },{
            "countDate":"2015-01-04",
            "newCustomer":18,
            "oldCustomer":37,
            "isNewRecord":false
            }],
        "2017-01-22":[{
            "countDate":"2014-02-05",
            "newCustomer":13,
            "oldCustomer":31,
            "isNewRecord":false
            },{
            "countDate":"2014-03-06",
            "newCustomer":12,
            "oldCustomer":39,
            "isNewRecord":false
            },{
            "countDate":"2014-05-07",
            "newCustomer":15,
            "oldCustomer":42,
            "isNewRecord":false
            },{
            "countDate":"2015-01-08",
            "newCustomer":12,
            "oldCustomer":31,
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersNumInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "taobao":[{
            "countDate":"2017-01-21",
            "customerNumber":622,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":632,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":612,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":632,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            }],
        "seller2":[{
            "countDate":"2017-01-21",
            "customerNumber":652,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":612,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":652,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":642,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersAvgInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "taobao":[{
            "countDate":"2017-01-21",
            "customerNumber":622,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":632,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":612,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":632,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            }],
        "seller2":[{
            "countDate":"2017-01-21",
            "customerNumber":652,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":612,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":652,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            },{
            "countDate":"2017-01-21",
            "customerNumber":642,
            "shopName":"",
            "customerRatio":"0.13",
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersInInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "rew":[{
            "countDate":"2017-01-21",
            "incrementNum":622,
            "shopName":"ds"
            },{
            "countDate":"2017-01-21",
            "incrementNum":635,
            "shopName":"ds"
            },{
            "countDate":"2017-01-21",
            "incrementNum":612,
            "shopName":"ds"
            },{
            "countDate":"2017-01-21",
            "incrementNum":632,
            "shopName":"ds"
            }],
        "edd":[{
            "countDate":"2017-01-21",
            "incrementNum":652,
            "shopName":"ds"
            },{
            "countDate":"2017-01-21",
            "incrementNum":612,
            "shopName":"ds"
            },{
            "countDate":"2017-01-21",
            "incrementNum":658,
            "shopName":"ds"
            },{
            "countDate":"2017-01-21",
            "incrementNum":642,
            "shopName":"ds"
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersOldOrNewInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "countDate":"2014-2-1",
            "newCustomer":12,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            },{
            "countDate":"2014-3-1",
            "newCustomer":21,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            },{
            "countDate":"2014-5-1",
            "newCustomer":12,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            },{
            "countDate":"2015-1-2",
            "newCustomer":18,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            }],
        "seller2":[{
            "countDate":"2014-2-1",
            "newCustomer":13,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            },{
            "countDate":"2014-3-1",
            "newCustomer":12,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            },{
            "countDate":"2014-5-1",
            "newCustomer":15,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            },{
            "countDate":"2015-1-2",
            "newCustomer":12,
            "oldCustomer":12,
            "shopName":"ta",
            "isNewRecord":false
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersOut/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"2014-2-1",
            "percent":12
            },{
            "time":"2014-3-1",
            "percent":21
            },{
            "time":"2014-5-1",
            "percent":12
            },{
            "time":"2015-1-2",
            "percent":18
            }],
        "seller2":[{
            "time":"2014-2-1",
            "percent":13
            },{
            "time":"2014-3-1",
            "percent":12
            },{
            "time":"2014-5-1",
            "percent":15
            },{
            "time":"2015-1-2",
            "percent":12
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersDeepInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "se21":[{
            "countDate":"2014-2-1",
            "jumpNum":112,
            "deepNum":123,
            "deepRatio":"19.0",
            "jumpRatio":"12.0"
            },{
            "countDate":"2014-3-1",
            "jumpNum":421,
            "deepNum":241,
            "deepRatio":"11.0",
            "jumpRatio":"43.0"
            },{
            "countDate":"2014-5-1",
            "jumpNum":122,
            "deepNum":543,
            "deepRatio":"12.0",
            "jumpRatio":"11.0"
            },{
            "countDate":"2015-1-2",
            "jumpNum":418,
            "deepNum":523,
            "deepRatio":"51.0",
            "jumpRatio":"8.0"
            }],
        "seller2":[{
            "countDate":"2014-2-1",
            "jumpNum":113,
            "deepNum":412,
            "deepRatio":"32.0",
            "jumpRatio":"12.0"
            },{
            "countDate":"2014-3-1",
            "jumpNum":142,
            "deepNum":231,
            "deepRatio":"34.0",
            "jumpRatio":"31.0"
            },{
            "countDate":"2014-5-1",
            "jumpNum":135,
            "deepNum":123,
            "deepRatio":"42.0",
            "jumpRatio":"11.0"
            },{
            "countDate":"2015-1-2",
            "jumpNum":312,
            "deepNum":423,
            "deepRatio":"12.0",
            "jumpRatio":"32.0"
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersStayBarInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "fds":[{
            "key":"一分钟内",
            "value":12
            },{
            "key":"10分钟内",
            "value":21
            },{
            "key":"20分钟内",
            "value":12
            },{
            "key":"30分钟内",
            "value":18
            },{
            "key":"1小时内",
            "value":12
            },{
            "key":"1小时以上",
            "value":18
            }],
        "seller2":[{
            "key":"一分钟内",
            "value":13
            },{
            "key":"10分钟内",
            "value":12
            },{
            "key":"20分钟内",
            "value":15
            },{
            "key":"30分钟内",
            "value":12
            },{
            "key":"1小时内",
            "value":12
            },{
            "key":"1小时以上",
            "value":18
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersActiveInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "f1":[{
            "key":"高活跃度",
            "value":122
            },{
            "key":"中活跃度",
            "value":251
            },{
            "key":"低活跃度",
            "value":122
            },{
            "key":"沉睡活跃度",
            "value":418
            }],
        "21":[{
            "key":"高活跃度",
            "value":113
            },{
            "key":"中活跃度",
            "value":142
            },{
            "key":"低活跃度",
            "value":125
            },{
            "key":"沉睡活跃度",
            "value":412
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersTimeSectionInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"0-6时",
            "num":122
            },{
            "time":"6-12时",
            "num":251
            },{
            "time":"12-18时",
            "num":122
            },{
            "time":"18-24时",
            "num":418
            }],
        "seller2":[{
            "time":"0-6时",
            "num":113
            },{
            "time":"6-12时",
            "num":142
            },{
            "time":"12-18时",
            "num":125
            },{
            "time":"18-24时",
            "num":412
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersCycleInit/:sellers/:time", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "key":"一天以内",
            "value":122
            },{
            "key":"三天以内",
            "value":251
            },{
            "key":"一周以内",
            "value":122
            },{
            "key":"一月以内",
            "value":418
            },{
            "key":"一月以上",
            "value":412
            }],
        "seller2":[{
            "key":"一天以内",
            "value":113
            },{
            "key":"三天以内",
            "value":142
            },{
            "key":"一周以内",
            "value":125
            },{
            "key":"一月以内",
            "value":412
            },{
            "key":"一月以上",
            "value":419
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`[{
                    "seller":"taobao",
                    "num":492
                },{
                    "seller":"商家2",
                    "num":451
                },{
                    "seller":"商家3",
                    "num":512
                },{
                    "seller":"商家1",
                    "num":418
            },{
                    "seller":"商家3",
                    "num":448
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家3",
                    "num":418
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家4",
                    "num":488
            }
            ,{
                    "seller":"商家7",
                    "num":424
            },{
                    "seller":"商家2",
                    "num":451
                },{
                    "seller":"商家3",
                    "num":512
                },{
                    "seller":"商家1",
                    "num":418
            },{
                    "seller":"商家3",
                    "num":448
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家3",
                    "num":418
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家4",
                    "num":488
            }
            ,{
                    "seller":"商家7",
                    "num":424
            },{
                    "seller":"商家2",
                    "num":451
                },{
                    "seller":"商家3",
                    "num":512
                },{
                    "seller":"商家1",
                    "num":418
            },{
                    "seller":"商家3",
                    "num":448
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家3",
                    "num":418
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家4",
                    "num":488
            }
            ,{
                    "seller":"商家7",
                    "num":424
            },{
                    "seller":"商家2",
                    "num":451
                },{
                    "seller":"商家3",
                    "num":512
                },{
                    "seller":"商家1",
                    "num":418
            },{
                    "seller":"商家3",
                    "num":448
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家3",
                    "num":418
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家4",
                    "num":488
            }
            ,{
                    "seller":"商家7",
                    "num":424
            },{
                    "seller":"商家2",
                    "num":451
                },{
                    "seller":"商家3",
                    "num":512
                },{
                    "seller":"商家1",
                    "num":418
            },{
                    "seller":"商家3",
                    "num":448
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家3",
                    "num":418
            }
            ,{
                    "seller":"商家1",
                    "num":468
            }
            ,{
                    "seller":"商家4",
                    "num":488
            }
            ,{
                    "seller":"商家7",
                    "num":424
            }]`
    res.write(data);
    res.end();
});
module.exports = router;
