/**
 * Created by HH on 2017/3/4.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const {connect,Provider}=require('react-redux');
const {Table } = require('react-bootstrap');
const thunk = require('redux-thunk').default;
var echarts = require('echarts');  
// var echarts = require('echarts/lib/echarts'); //必须
// require('echarts/lib/chart/pie'); //图表类型
// require('echarts/lib/component/title'); //标题插件



function reducer(state,action){
    if(typeof state === 'undefined') return {list:[],name:'evan'};
    switch(action.type){
        case 'add':
            let list=state.list.concat(action.payload);   //title不是value了
            // console.log(list);
            return Object.assign({},state,{list});
        case 'logined':
            if(action.error){
                return Object.assign({},state,{loginError:action.payload ,logined:false});
            }else{
                return Object.assign({},state,{loginError:null ,logined:true});
            }
        case 'init':
            const time=new Array();
            const value=new Array();
            // const obj={};
            //获取time和value数据
            // console.log(state)
            action.payload.list.map(item=>{
                time.push(item.time)
                value.push(item.value)
            })
            //aa是新obj，用于返回
            var aa = Object.assign({},state,{});
            aa.xAxis.data=time;
            
            aa.series.data=value;
            // action.chart.hideLoading()  //隐藏遮罩
            action.chart.setOption(aa)
            // console.log(aa);

            return aa;
        case 'logout':
            return Object.assign({},state,{loginError:null ,logined:false});
        case 'change':
            // var aa = Object.assign({},state,{});
            // var aa = state;
            // aa.xAxis.data.push(action.payload.time);
            // aa.series.data.push(parseInt(action.payload.value));


            // console.log(action.payload.time)
            var dataX = state.xAxis.data.concat(action.payload.time);
            var dataY = state.series.data.concat(action.payload.value);
            
            /*新option，更新视图*/
            var aa={
                xAxis: {
                    data: dataX
                },
                series: {
                data: dataY
            }

            }
            // console.log(Object.assign({},state,aa))


            action.chart.setOption(aa)
            // console.log(action)

            return Object.assign({},state,aa);
        default:return state;
    }
}
var dataX,dataY;
  // var options={
  //       // title: { 
  //       //     text: 'xx商场客流量',
  //       //     textAlign:'center',
  //       //     left:'50%',
  //       //     top:'5%',
  //       //     textStyle:{
  //       //         fontSize:'23'
  //       //     }
  //       // },
  //       tooltip: {
  //           trigger: 'axis'
  //       },
  //       xAxis: {
  //           data: dataX
  //       },
  //       yAxis: {
  //           splitLine: {
  //               show: false
  //           }
  //       },
  //       dataZoom: [{
  //           startValue: '16:32:00'
  //       }, {
  //           type: 'inside'
  //       }],
  //       series: {
  //           name: '人流量',
  //           type: 'line',
  //           data: dataY,
  //           smooth:true,
  //           color:['rgba(150,187,223,1)'],
  //           // backgroundColor:'rgb(228, 228, 228)',
  //           // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,false),
  //           symbol: 'none',
  //           // stack: 'a',
  //           areaStyle: {
  //               normal: {}
  //           },
  //           markLine: {
  //               silent: true,
  //               data: [{
  //                   yAxis: 100
  //               }, {
  //                   yAxis: 200
  //               }, {
  //                   yAxis: 300
  //               }, {
  //                   yAxis: 400
  //               }]
  //           }
  //       }
  //       }

var options2={
    xAxis:{
        data:dataX
    },
    yAxis:{

    },
    series:{
        name:'renliul',
        type:'line',
        data:dataY,
        color:['rgb(150,187,223)'],
        areaStyle:{
            normal:{}
        }
    }
}
const store=redux.createStore(reducer,options2,redux.applyMiddleware(thunk));

const actions={
    init(myChart){
        return function(dispatch){
            fetch('http://localhost:3000/hour/init').then((data)=>{
                data.json().then(data=>{
                    // myChart.showLoading()   //显示遮罩
                    dispatch({
                        type:'init',
                        payload:data,
                        chart:myChart
                    })
                })
            })
        }
    },
    change(myChart){
        return function(dispatch){
            fetch('http://localhost:3000/hour/change').then(data=>{
                data.json().then(data=>{
                    dispatch({
                        type:'change',
                        payload:data,
                        chart:myChart
                    })
                })
            })
        }
    }
}





let _Chart = React.createClass({
    getInitialState(){
        return{
            myChart:""
        }
    },
    componentDidMount(){
        var dom = ReactDOM.findDOMNode(this.refs.mm);
        this.state.myChart = echarts.init(dom);
        this.props.init(this.state.myChart);
        // var dom = ReactDOM.findDOMNode(this.refs.mm);
        // var myChart = echarts.init(dom);

        // fetch('http://localhost:3000/hour',{
        //     headers:{
        //         'Accept': 'application/json'
        //     }
        // }).then((data)=>{
        //     console.log(data.json())
        //     data.json().then(data=>{
        //             console.log('aa')
        //         })
        // })
        // myChart.setOption();
        // setTimeout(this.props.change(this.refs.mm),1000)
        // setInterval(this.start,3000)

    },
    start(){
        this.props.change(this.state.myChart)
    },
    componentDidUpdate(){
        // console.log('.....')
        // this.props.change(this.refs.mm);
        // setInterval(this.props.change(this.state.myChart),1000)
    },
    render(){
        return <div ref="mm" style={{height:"100%",width:"100%"}}></div>
    }

})

let Chart=connect(state=>state,actions)(_Chart);

ReactDOM.render(<Provider store={store}>
    <Chart /></Provider>,document.getElementById('main'));