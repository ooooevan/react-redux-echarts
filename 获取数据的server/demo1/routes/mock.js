var express = require('express');
var Mock = require('mockjs');
var router = express.Router();

router.get('/', function(req, res, next) {
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        //'list|1-10': [{
        //    // 属性 id 是一个自增数，起始值为 1，每次增 1
        //    'id|+1': 2
        //}],
        'name6|3.5': 1,
        'name3-0|1-5.1-3': 2,//数据类型是number
        'name4|5.2-4': 19,
        'Object1|1-3': {
            'a': 1,
            "b": 2,
            "c": 3
        },
        "array|+1": [
            "AMD",
            "CMD",
            "UMD"
        ],
        name2:'@boolean()',
        'name7|+1': 12,
        'increment':'@increment()'
    });
// 输出结果
//    console.log(JSON.stringify(data, null, 4));
    res.send(JSON.stringify(data, null, 4))
});

module.exports = router;
