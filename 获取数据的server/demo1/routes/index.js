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







module.exports = router;
