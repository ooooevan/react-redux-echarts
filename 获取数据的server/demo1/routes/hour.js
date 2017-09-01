var express = require("express");
var Mock = require("mockjs");
var router = express.Router();
router.post("/init", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});
	// res.header("Access-Control-Allow-Origin", "*");  
	console.log(req.params)
	console.log(req.body)
	console.log(req.query)
	var now=new Date()
	now = [now.getHours(), now.getMinutes() + 1, now.getSeconds()].join(':')
	var value=parseInt(300+(Math.random() - 0.4 )*100);

	var data =`
	{"time":"${now}","value":"${value}","percent":2}
`
	res.write(data);
	res.end();
});
router.get("/init", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});

	var data =
		// `
		// 	{"a":[{"sd":1},{"sd":"1"}]}

		`
	[{
			"countDate": "2017-05-10 16:32:00",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:00",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:01",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:03",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:04",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:05",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:06",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:00",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:07",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:10",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:15",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:16",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:11",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:20",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:21",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:14",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:00",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:15",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:00",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:53",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:25",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:25",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:00",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:23",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-10 16:32:10",
			"customerNumber": 341,
			"yesterdayMaxNumber":0,
			"isNewRecord":false
		}, {
			"countDate": "2017-05-09 16:32:01",
			"customerNumber": 0,
			"yesterdayMaxNumber":210,
			"isNewRecord":false
		}]
`
	res.write(data);
	res.end();
});

router.get("/fetch", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});
	// var now=new Date()
	// now = [now.getHours(), now.getMinutes() + 1, now.getSeconds()].join(':')
	var value=parseInt(300+(Math.random() - 0.4 )*100);
	var fenzhong=parseInt(value/10);
	// console.log(value)
	var data =`
	{"customerNumber":"${value}","yesterdayMaxNumber":0,"countDate":"2017-05-09 16:${fenzhong}:00","isNewRecord":false}
`
	res.write(data);
	res.end();
});

router.get("/singleSeller/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
  var seller=`{
        "name":"淘宝",
        "value":[{
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
        }
        ,{
            "time":"12:23:31",
            "num":553,
            "percent":2
        }
        ,{
            "time":"12:27:31",
            "num":674,
            "percent":4
        }
        ,{
            "time":"12:31:31",
            "num":632,
            "percent":2.4
        }
        ,{
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
        }
        ,{
            "time":"13:23:31",
            "num":553,
            "percent":2
        }
        ,{
            "time":"13:27:31",
            "num":674,
            "percent":4
        }
        ,{
            "time":"13:31:31",
            "num":632,
            "percent":2.4
        }
        ,{
            "time":"13:43:31",
            "num":613,
            "percent":2
        }]
    }`
var seller2=`{
        "name":"淘宝222",
        "value":[{
            "time":"12:21:08",
            "num":552,
            "percent":3
        },{
            "time":"12:21:31",
            "num":523,
            "percent":2.4
        },{
            "time":"12:22:11",
            "num":326,
            "percent":2.8
        }
        ,{
            "time":"12:23:31",
            "num":553,
            "percent":2
        }
        ,{
            "time":"12:27:31",
            "num":574,
            "percent":1
        }
        ,{
            "time":"12:31:31",
            "num":532,
            "percent":2.4
        }
        ,{
            "time":"12:43:31",
            "num":413,
            "percent":2
        },{
            "time":"13:21:31",
            "num":323,
            "percent":2.4
        },{
            "time":"13:22:11",
            "num":326,
            "percent":2.8
        }
        ,{
            "time":"13:23:31",
            "num":253,
            "percent":2
        }
        ,{
            "time":"13:27:31",
            "num":174,
            "percent":4
        }
        ,{
            "time":"13:31:31",
            "num":132,
            "percent":2.4
        }
        ,{
            "time":"13:43:31",
            "num":713,
            "percent":2
        }]
    }`
    console.log(req.params.id)
	if(req.params.id === '333'){
		res.write(seller2);
	}else{
		res.write(seller);
	}
	res.end();
})

router.get("/singleSellerCustomerNumFetch/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num1=500 + parseInt(Math.random()*100);
	var num2=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`{
            "countDate":"2017-09-1 12:21:12",
            "customerNumber":${num1},
            "doorCustomerNumber":${num2},
            "shopName":"wedf",
            "customerRatio":${percent},
            "yesterdayMaxNumber":0
	}`
	res.write(seller);
	res.end();

})

router.get("/singleSellerRadar/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[{
		"indicators":"入店量",
		"score":"64.0",
		"isNewRecord":false
	},{
		"indicators":"新顾客",
		"score":"42",
		"isNewRecord":false
	},{
		"indicators":"老顾客",
		"score":"47",
		"isNewRecord":false
	},{
		"indicators":"深访量",
		"score":"42",
		"isNewRecord":false
	},{
		"indicators":"活跃度",
		"score":"67",
		"isNewRecord":false
	}]`
	res.write(seller);
	res.end();
})
router.get("/singleSellerStayBar/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[{
            "key":"少于5分钟",
            "value":"300"
        },{
        		"key":"10分钟",
            "value":"800"
        },{
        		"key":"30分钟",
            "value":"500"
        },{
        		"key":"45分钟",
            "value":"400"
        },{
        		"key":"大于60分钟",
            "value":"100"
        }]
	`
	res.write(seller);
	res.end();
})
router.get("/singleSellerOldOrNew/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var data=`[
		{
			"countDate":"2017-4-21",
      "newCustomer":"200",
      "shopName":"taboa",
      "oldCustomer":"650"
		},{
			"countDate":"2017-4-22",
			"newCustomer":"224",
			"shopName":"taboa",
			"oldCustomer":"610"
		},{
			"countDate":"2017-4-23",
			"newCustomer":"190",
			"shopName":"taboa",
			"oldCustomer":"730"
		}
	]`
	res.write(data);
	res.end();
})
router.get("/statisticsOldOrNewInit/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var data=`[
		{
			"countDate":"2017-4-21",
      "newCustomer":"200",
      "oldCustomer":"650"
		},{
			"countDate":"2017-4-22",
			"newCustomer":"224",
			"oldCustomer":"610"
		},{
			"countDate":"2017-4-23",
			"newCustomer":"190",
			"oldCustomer":"730"
		}
	]`
	res.write(data);
	res.end();
})
router.get("/singleSellerTimeSection/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[{
            "key":"0-2",
            "value":"50"
        },{
        		"key":"2-4",
            "value":"10"
        },{
        		"key":"4-6",
            "value":"7"
        },{
        		"key":"6-8",
            "value":"400"
        },{
        		"key":"8-10",
            "value":"800"
        },{
            "key":"10-12",
            "value":"792"
        },{
        		"key":"12-14",
            "value":"1073"
        },{
        		"key":"14-16",
            "value":"970"
        },{
        		"key":"16-18",
            "value":"1421"
        },{
        		"key":"18-20",
            "value":"1082"
        },{
            "key":"20-22",
            "value":"1181"
        },{
        		"key":"22-24",
            "value":"2091"
        }]
	`
	res.write(seller);
	res.end();
})
router.get("/statisticsTimeSectionInit/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[{
            "key":"0-2",
            "value":"50"
        },{
        		"key":"2-4",
            "value":"10"
        },{
        		"key":"4-6",
            "value":"7"
        },{
        		"key":"6-8",
            "value":"400"
        },{
        		"key":"8-10",
            "value":"800"
        },{
            "key":"10-12",
            "value":"792"
        },{
        		"key":"12-14",
            "value":"1073"
        },{
        		"key":"14-16",
            "value":"970"
        },{
        		"key":"16-18",
            "value":"1421"
        },{
        		"key":"18-20",
            "value":"1082"
        },{
            "key":"20-22",
            "value":"1181"
        },{
        		"key":"22-24",
            "value":"2091"
        }]
	`
	res.write(seller);
	res.end();
})
router.get("/singleSellerDeepVisit/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[
			{
				"time":"2017-2-32",
        "deep":"20"
			},
			{
				"time":"2017-2-33",
        "deep":"10"
			},
			{
				"time":"2017-2-34",
        "deep":"23"
			},
			{
				"time":"2017-2-35",
        "deep":"28"
			},
			{
				"time":"2017-2-36",
        "deep":"19"
			}
	]`
	var seller1=`[{
		"jumpNum":10,
		"jumpRatio":"1.0",
		"deepNum":3,
		"deepRatio":"0.8",
		"shopName":"taoabo",
		"countDate":"2017-01-12",
		"isNewRecord":false
	},{
		"jumpNum":10,
		"jumpRatio":"1.4",
		"deepNum":3,
		"deepRatio":"1.0",
		"shopName":"taoabo",
		"countDate":"2017-01-12",
		"isNewRecord":false
	},{
		"jumpNum":10,
		"jumpRatio":"1.2",
		"deepNum":3,
		"deepRatio":"0.4",
		"shopName":"taoabo",
		"countDate":"2017-01-12",
		"isNewRecord":false
	},{
		"jumpNum":11,
		"jumpRatio":"1.0",
		"deepNum":3,
		"deepRatio":"0.7",
		"shopName":"taoabo",
		"countDate":"2017-01-12",
		"isNewRecord":false
	},{
		"jumpNum":10,
		"jumpRatio":"0.4",
		"deepNum":3,
		"deepRatio":"1.0",
		"shopName":"taoabo",
		"countDate":"2017-01-12",
		"isNewRecord":false
	}]`
	res.write(seller1);
	res.end();
})
router.get("/singleSellerCycleAndActive/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`{
    "data1":[{
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
    }],
    "data2":[{
    	"name":"高活跃度",
    	"value":"415"
    },{
    	"name":"中活跃度",
    	"value":"680"
    },{
    	"name":"低活跃度",
    	"value":"214"
    },{
    	"name":"沉睡活跃度",
    	"value":"152"
    }]
	}`
	res.write(seller);
	res.end();
})
router.get("/singleSellerCustomerInInit/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var id=req.params.id.substr(0,4);
	var seller=`{
        "name":"淘宝${id}",
        "value":[{
            "time":"12:21:08",
            "num":232,
            "percent1":3,
            "percent2":2
        },{
            "time":"12:21:31",
            "num":633,
            "percent1":2.4,
            "percent2":2.5
        },{
            "time":"12:22:11",
            "num":656,
            "percent1":2.8,
            "percent2":1
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent1":2,
            "percent2":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent1":4,
            "percent2":1.3
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent1":2.4,
            "percent2":1
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent1":2,
            "percent2":2.1
        },{
            "time":"13:21:31",
            "num":633,
            "percent1":2.4,
            "percent2":6
        },{
            "time":"13:22:11",
            "num":666,
            "percent1":2.8,
            "percent2":1.2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent1":2,
            "percent2":2
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent1":4,
            "percent2":1.7
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent1":2.4,
            "percent2":3.2
        }
        ,{
            "time":"13:43:31",
            "num":413,
            "percent1":2,
            "percent2":1
        }]
    }`
    var seller1 = `[{
							    	"incrementNum":120,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":130,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":11,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":13,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":40,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11",
							    	"isNewRecord":false
    }]`
    var seller2 = `[{
							    	"incrementNum":101,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11 21:21:41",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":102,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11 21:21:41",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":41,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11 21:21:41",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":143,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11 21:21:41",
							    	"isNewRecord":false
							    },{
							    	"incrementNum":120,
							    	"incrementRatio":"22.0",
							    	"shopName":"taobao",
							    	"countDate":"2017-02-11 21:21:41",
							    	"isNewRecord":false
    }]`
    if(Math.random() > 0.5){
    	seller1=seller2;
    }
	res.write(seller1);
	res.end();
})
router.get("/singleSellerCustomerFlowInit/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var id=req.params.id.substr(0,4);
	/*var seller=`{
        "name":"淘宝${id}",
        "value":[{
            "time":"12:21:08",
            "num":632,
            "percent":7

        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent":3
        }
        ,{
            "time":"13:43:31",
            "num":413,
            "percent":5
        },{
            "time":"12:21:08",
            "num":632,
            "percent":7

        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent":3
        },{
            "time":"12:21:08",
            "num":632,
            "percent":7

        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent":3
        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent":3
        }
        ,{
            "time":"13:43:31",
            "num":413,
            "percent":5
        },{
            "time":"12:21:08",
            "num":632,
            "percent":7

        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent":3
        },{
            "time":"12:21:08",
            "num":632,
            "percent":7

        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }]
    }`*/
  var seller1=`[
  			{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },,{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },,{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },,{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21",
          "isNewRecord":false
        },
  ]`
  var seller2=`[
  			{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 21:21:21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        },{
          "customerNumber":456,
          "customerRatio":"32.0",
          "shopName":"ew",
          "countDate":"2014-21-21 08:29:32",
          "isNewRecord":false
        }
  ]`
  if(Math.random() > 0.5){
  	seller1=seller2;
	}
	res.write(seller1);
	res.end();
})
router.get("/singleSellerCustomerAvgInit/:id/:time",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var id=req.params.id.substr(0,4);
	var seller=`{
        "name":"淘宝${id}",
        "value":[{
            "time":"12:21:08",
            "num":632,
            "percent":7

        },{
            "time":"12:21:31",
            "num":633,
            "percent":5
        },{
            "time":"12:22:11",
            "num":656,
            "percent":5
        }
        ,{
            "time":"12:23:31",
            "num":563,
            "percent":4
        }
        ,{
            "time":"12:27:31",
            "num":644,
            "percent":2
        }
        ,{
            "time":"12:31:31",
            "num":662,
            "percent":3
        }
        ,{
            "time":"12:43:31",
            "num":613,
            "percent":1
        },{
            "time":"13:21:31",
            "num":633,
            "percent":4
        },{
            "time":"13:22:11",
            "num":666,
            "percent":2
        }
        ,{
            "time":"13:23:31",
            "num":533,
            "percent":6
        }
        ,{
            "time":"13:27:31",
            "num":634,
            "percent":2
        }
        ,{
            "time":"13:31:31",
            "num":532,
            "percent":3
        }
        ,{
            "time":"13:43:31",
            "num":413,
            "percent":5
        }]
    }`
  var seller1=`[
  			{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21",
  				"isNewRecord":false
  			}
  ]`
  var seller2=`[
  			{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 21:21:21",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			},{
  				"customerNumber":456,
  				"customerRatio":"32.0",
  				"shopName":"ew",
  				"countDate":"2014-21-21 08:29:32",
  				"isNewRecord":false
  			}
  ]`
  if(Math.random() > 0.5){
  	seller1=seller2;
	}
	res.write(seller1);
	res.end();
})
router.get("/singleSellerCustomerNumInit/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var sellerNum=parseInt(10*Math.random());
	var index=req.params.id.indexOf('&');
	var id=req.params.id.substr(0,index);
	/*
		num1:入店量
		num2:门前客流量
		percent:可以是门前客流入店的比例，也可以是总入店比例  （入店比例）

	*/
	var seller=`{
        "name":"淘宝${id}",
        "value":[{
            "time":"12:21:08",
            "num1":632,
            "num2":722,
            "percent":88
        }]
    }`
	var seller1=`[
				{
					"customerNumber":123,
					"doorCustomerNumber":123,
					"customerRatio":"50.0",
					"yesterdayMaxNumber":0,
					"shopName":"taobao",
					"countDate":"2017-05-10 15:21:33",
					"isNewRecord":false
				},{
					"customerNumber":123,
					"doorCustomerNumber":123,
					"customerRatio":"50.0",
					"yesterdayMaxNumber":0,
					"shopName":"taobao",
					"countDate":"2017-05-10 15:21:33",
					"isNewRecord":false
				},{
					"customerNumber":123,
					"doorCustomerNumber":123,
					"customerRatio":"50.0",
					"yesterdayMaxNumber":0,
					"shopName":"taobao",
					"countDate":"2017-05-10 15:21:33",
					"isNewRecord":false
				},{
					"customerNumber":123,
					"doorCustomerNumber":123,
					"customerRatio":"50.0",
					"yesterdayMaxNumber":0,
					"shopName":"taobao",
					"countDate":"2017-05-10 15:21:33",
					"isNewRecord":false
				},{
					"customerNumber":123,
					"doorCustomerNumber":123,
					"customerRatio":"50.0",
					"yesterdayMaxNumber":0,
					"shopName":"taobao",
					"countDate":"2017-05-10 15:21:33",
					"isNewRecord":false
				},{
					"customerNumber":0,
					"doorCustomerNumber":0,
					"yesterdayMaxNumber":678,
					"maxNumberTime":"2017-05-10 15:21:33",
					"isNewRecord":false
				}]`
	res.write(seller1);
	res.end();
})
router.get("/login",function(req,res,next){
	// res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	console.log(req.params)


	res.write('ok!');
	res.end();
})
module.exports = router;