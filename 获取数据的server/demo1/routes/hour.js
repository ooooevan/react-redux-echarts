var express = require("express");
var Mock = require("mockjs");
var router = express.Router();
router.get("/init", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});

	var data =
		// `
		// 	{"a":[{"sd":1},{"sd":"1"}]}

		`
	[{
			"time": "16:32:00",
			"value": 341
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		}, {
			"time": "16:32:03",
			"value": 513
		}, {
			"time": "16:32:06",
			"value": 351
		}, {
			"time": "16:32:09",
			"value": 151
		}, {
			"time": "16:32:012",
			"value": 524
		}, {
			"time": "16:32:015",
			"value": 524
		}, {
			"time": "16:32:018",
			"value": 524
		}, {
			"time": "16:32:021",
			"value": 524
		}, {
			"time": "16:32:024",
			"value": 524
		}, {
			"time": "16:32:027",
			"value": 524
		}, {
			"time": "16:32:30",
			"value": 534
		}, {
			"time": "16:32:33",
			"value": 543
		}, {
			"time": "16:32:36",
			"value": 534
		}, {
			"time": "16:32:39",
			"value": 543
		}, {
			"time": "16:32:42",
			"value": 531
		}, {
			"time": "16:32:45",
			"value": 153
		}, {
			"time": "16:32:48",
			"value": 543
		}, {
			"time": "16:32:51",
			"value": 534
		}, {
			"time": "16:32:54",
			"value": 254
		}, {
			"time": "16:32:57",
			"value": 254
		}, {
			"time": "16:32:60",
			"value": 245
		}, {
			"time": "16:32:63",
			"value": 546
		}, {
			"time": "16:32:66",
			"value": 654
		}, {
			"time": "16:32:69",
			"value": 154
		}, {
			"time": "16:32:72",
			"value": 135
		}, {
			"time": "16:32:75",
			"value": 214
		}, {
			"time": "16:32:78",
			"value": 242
		}, {
			"time": "16:32:81",
			"value": 124
		}, {
			"time": "16:32:84",
			"value": 235
		}, {
			"time": "16:32:87",
			"value": 264
		}, {
			"time": "16:32:90",
			"value": 214
		}, {
			"time": "16:32:93",
			"value": 231
		}, {
			"time": "16:32:96",
			"value": 431
		}, {
			"time": "16:32:99",
			"value": 323
		}, {
			"time": "16:32:102",
			"value": 321
		}, {
			"time": "16:32:105",
			"value": 321
		},{
			"num":110,
			"increase":true,
			"most":1958,
			"avg":789,
			"timeSection":"17:00-21:30"
		}]
`
		// console.log(data.toString())
	res.write(data);
	res.end();
});

router.get("/change", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});
	var now=new Date()
	now = [now.getHours(), now.getMinutes() + 1, now.getSeconds()].join(':')
	var value=parseInt(300+(Math.random() - 0.4 )*100);

	var data =`
	{"time":"${now}","value":"${value}"}
`
		
		// console.log(data)
		// console.log(JSON.stringify(data.toJSONString()))
	res.write(data);
	res.end();
});
router.get("/pie", function(req, res, next) {
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*"
	});
	function getVal(){
	var _=(Math.random()>.5)?'+':'-';
	var value;
	if(_ == '-'){
		value=parseInt(300+ -(Math.random())*100);
	}else{
		value=parseInt(300+ (Math.random())*100);
	}
	// console.log(value)
	return value
	}
	// console.log(getVal());
	var data =`[
	{"value":"${getVal()}","name":"视频广告"},
	{"value":"${getVal()}","name":"联盟广告"},
	{"value":"${getVal()}","name":"邮件营销"},
	{"value":"${getVal()}","name":"直接访问"},
	{"value":"${getVal()}","name":"搜索引擎"}]
`
		console.log(data)
		// console.log(JSON.stringify(data.toJSONString()))
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
            "time":"12:21:08",
            "num1":${num1},
            "num2":${num2},
            "percent":${percent}
	}`
	res.write(seller);
	res.end();

})

router.get("/singleSellerRadar/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[72,65,91,59,27]`
	res.write(seller);
	res.end();
})
router.get("/singleSellerStayBar/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[{
            "name":"少于5分钟",
            "value":"300"
        },{
        		"name":"10分钟",
            "value":"800"
        },{
        		"name":"30分钟",
            "value":"500"
        },{
        		"name":"45分钟",
            "value":"400"
        },{
        		"name":"大于60分钟",
            "value":"100"
        }]
	`
	res.write(seller);
	res.end();
})
router.get("/singleSellerOldOrNew/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`{
            "new":"200",
            "old":"650"
	}`
	res.write(seller);
	res.end();
})
router.get("/singleSellerTimeSection/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`[{
            "name":"0",
            "value":"50"
        },{
        		"name":"2",
            "value":"10"
        },{
        		"name":"4",
            "value":"7"
        },{
        		"name":"6",
            "value":"400"
        },{
        		"name":"8",
            "value":"800"
        },{
            "name":"10",
            "value":"792"
        },{
        		"name":"12",
            "value":"1073"
        },{
        		"name":"14",
            "value":"970"
        },{
        		"name":"16",
            "value":"1421"
        },{
        		"name":"6",
            "value":"1082"
        },{
            "name":"18",
            "value":"1181"
        },{
        		"name":"20",
            "value":"2091"
        },{
        		"name":"22",
            "value":"1741"
        }]
	`
	res.write(seller);
	res.end();
})
router.get("/singleSellerDeepVisit/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`{
            "deep":"105",
            "common":"1750",
            "shallow":"203"
	}`
	res.write(seller);
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
router.get("/singleSellerCustomerFlowInit/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	var seller=`{
        "name":"淘宝",
        "value":[{
            "time":"12:21:08",
            "num":632,
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
	res.write(seller);
	res.end();
})
router.get("/singleSellerCustomerNumInit/:id",function(req,res,next){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var num=500 + parseInt(Math.random()*100);
	var percent=1 + parseInt(Math.random()*10);
	/*
		num1:入店量
		num2:门前客流量
		percent:可以是门前客流入店的比例，也可以是总入店比例  （入店比例）

	*/
	var seller=`{
        "name":"淘宝",
        "value":[{
            "time":"12:21:08",
            "num1":632,
            "num2":722,
            "percent":88
        },{
            "time":"12:21:31",
            "num1":633,
            "num2":731,
            "percent":85
        },{
            "time":"12:22:11",
            "num1":646,
            "num2":756,
            "percent":70
        },{
            "time":"12:21:08",
            "num1":632,
            "num2":722,
            "percent":88
        },{
            "time":"12:21:31",
            "num1":633,
            "num2":731,
            "percent":85
        },{
            "time":"12:22:11",
            "num1":646,
            "num2":756,
            "percent":70
        },{
            "time":"12:21:08",
            "num1":632,
            "num2":722,
            "percent":88
        },{
            "time":"12:21:31",
            "num1":633,
            "num2":731,
            "percent":85
        },{
            "time":"12:22:11",
            "num1":646,
            "num2":756,
            "percent":70
        }]
    }`
	res.write(seller);
	res.end();
})

module.exports = router;