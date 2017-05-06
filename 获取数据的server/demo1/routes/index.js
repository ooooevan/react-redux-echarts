var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//      res.render('index', { title: 'Express' });
// });
router.get("/statisticsCustomerNumInit", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});

	var data =`
				[{
            "time":"12:21:08",
            "num":652,
            "percent":3
        },{
            "time":"12:21:31",
            "num":623,
            "percent":2.4
        },{
            "time":"12:22:11",
            "num":626,
            "percent":2.8
        },{
            "time":"12:23:31",
            "num":553,
            "percent":2
        },{
            "time":"12:27:31",
            "num":674,
            "percent":4
        },{
            "time":"12:31:31",
            "num":632,
            "percent":2.4
        },{
            "time":"12:43:31",
            "num":613,
            "percent":2
        },{
            "time":"13:21:31",
            "num":623,
            "percent":2.4
        },{
            "time":"13:22:11",
            "num":626,
            "percent":2.8
        },{
            "time":"13:23:31",
            "num":553,
            "percent":2
        },{
            "time":"13:27:31",
            "num":674,
            "percent":4
        },{
            "time":"13:31:31",
            "num":632,
            "percent":2.4
        },{
            "time":"13:43:31",
            "num":613,
            "percent":2
        }]
`
	res.write(data);
	res.end();
});
router.get("/statisticsCycleInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
        [{
            "time":"初次",
            "value":"414"
        },{
            "time":"昨日",
            "value":"627"
        },{
            "time":"前日",
            "value":"1449"
        },{
            "time":"一周前",
            "value":"782"
        },{
            "time":"半月前",
            "value":"582"
        },{
            "time":"一月前",
            "value":"219"
        }]
`
    res.write(data);
    res.end();
});
router.get("/statisticsActiveInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`
        [{
            "time":"沉睡活跃度",
            "value":"414"
        },{
            "time":"低活跃度",
            "value":"627"
        },{
            "time":"中活跃度",
            "value":"1449"
        },{
            "time":"高活跃度",
            "value":"782"
        }]
`
    res.write(data);
    res.end();
});
router.get("/allsellers/", function(req, res, next) {
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
router.get("/compareCustomerNum/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "data1":[{
            "time":"12:21:08",
            "num":622
            },{
            "time":"12:21:11",
            "num":632
            },{
            "time":"12:21:15",
            "num":612
            },{
            "time":"12:21:22",
            "num":632
            }],
        "data2":[{
            "time":"12:21:08",
            "num":652
            },{
            "time":"12:21:11",
            "num":612
            },{
            "time":"12:21:15",
            "num":652
            },{
            "time":"12:21:22",
            "num":642
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerCycleInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "data1":[{
            "time":"初次",
            "num":622
            },{
            "time":"昨日",
            "num":632
            },{
            "time":"前日",
            "num":612
            },{
            "time":"一周前",
            "num":632
            },{
            "time":"一月前",
            "num":632
            }],
        "data2":[{
            "time":"初次",
            "num":621
            },{
            "time":"昨日",
            "num":652
            },{
            "time":"前日",
            "num":612
            },{
            "time":"一周前",
            "num":652
            },{
            "time":"一月前",
            "num":642
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerActiveInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "data1":[{
            "time":"沉睡活跃度",
            "num":622
            },{
            "time":"低活跃度",
            "num":632
            },{
            "time":"中活跃度",
            "num":612
            },{
            "time":"高活跃度",
            "num":632
            }],
        "data2":[{
            "time":"沉睡活跃度",
            "num":621
            },{
            "time":"低活跃度",
            "num":652
            },{
            "time":"中活跃度",
            "num":612
            },{
            "time":"高活跃度",
            "num":652
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/customerDeepVisitInit/", function(req, res, next) {
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
router.get("/customerOldOrNewInit/", function(req, res, next) {
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
router.get("/sellersNumInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"12:21:08",
            "num":622
            },{
            "time":"12:21:11",
            "num":632
            },{
            "time":"12:21:15",
            "num":612
            },{
            "time":"12:21:22",
            "num":632
            }],
        "seller2":[{
            "time":"12:21:08",
            "num":652
            },{
            "time":"12:21:11",
            "num":612
            },{
            "time":"12:21:15",
            "num":652
            },{
            "time":"12:21:22",
            "num":642
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersInInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"12:21:08",
            "num":622
            },{
            "time":"12:21:11",
            "num":635
            },{
            "time":"12:21:15",
            "num":612
            },{
            "time":"12:21:22",
            "num":632
            }],
        "seller2":[{
            "time":"12:21:08",
            "num":652
            },{
            "time":"12:21:11",
            "num":612
            },{
            "time":"12:21:15",
            "num":658
            },{
            "time":"12:21:22",
            "num":642
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersOldOrNewInit/", function(req, res, next) {
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
router.get("/sellersDeepInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"2014-2-1",
            "percent":112
            },{
            "time":"2014-3-1",
            "percent":421
            },{
            "time":"2014-5-1",
            "percent":122
            },{
            "time":"2015-1-2",
            "percent":418
            }],
        "seller2":[{
            "time":"2014-2-1",
            "percent":113
            },{
            "time":"2014-3-1",
            "percent":142
            },{
            "time":"2014-5-1",
            "percent":135
            },{
            "time":"2015-1-2",
            "percent":312
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersStayBarInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"2014-2-1",
            "num":12
            },{
            "time":"2014-3-1",
            "num":21
            },{
            "time":"2014-5-1",
            "num":12
            },{
            "time":"2015-1-2",
            "num":18
            }],
        "seller2":[{
            "time":"2014-2-1",
            "num":13
            },{
            "time":"2014-3-1",
            "num":12
            },{
            "time":"2014-5-1",
            "num":15
            },{
            "time":"2015-1-2",
            "num":12
            }]
    }`
    res.write(data);
    res.end();
});
router.get("/sellersActiveInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"2014-2-1",
            "num":122
            },{
            "time":"2014-3-1",
            "num":251
            },{
            "time":"2014-5-1",
            "num":122
            },{
            "time":"2015-1-2",
            "num":418
            }],
        "seller2":[{
            "time":"2014-2-1",
            "num":113
            },{
            "time":"2014-3-1",
            "num":142
            },{
            "time":"2014-5-1",
            "num":125
            },{
            "time":"2015-1-2",
            "num":412
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
router.get("/sellersCycleInit/", function(req, res, next) {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var data =`{
        "seller1":[{
            "time":"初次",
            "num":122
            },{
            "time":"昨日",
            "num":251
            },{
            "time":"一周前",
            "num":122
            },{
            "time":"一月前",
            "num":418
            }],
        "seller2":[{
            "time":"初次",
            "num":113
            },{
            "time":"昨日",
            "num":142
            },{
            "time":"一周前",
            "num":125
            },{
            "time":"一月前",
            "num":412
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
