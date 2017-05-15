import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
const FaQuestion = require('react-icons/lib/fa/question');
import sellersAction from '../../actions/sellersAction';

class _Chart extends React.Component {
	static propTypes = {
        params: React.PropTypes.object.isRequired,   //商店id，这里为数字
        singleSellerCustomerNumInit: React.PropTypes.func.isRequired,
        singleSellerCustomerNumFetch:React.PropTypes.func.isRequired,
        customerNum:React.PropTypes.instanceOf(Immutable.Map)
    };

    constructor(props){
        super(props);
        this.state={
		singleSellerCustomerNumChart:'',  //商家图表
        now:{},
        yesterday:{},
      	param:'',   //路由参数
      	name:'',  //商家名
      	timer:'',    //定时器
        timeList:'',
        numList:'',
        percentList:'',
        tableSpace:3,
      	timerTime:1000*5,       //时间间隔
        resizeHandler:null
        }

    }
    componentWillMount(){
        // debugger;
        // 
        let id=this.props.params.id  //根据路由获取该商店id
        this.props.singleSellerCustomerNumInit(id);
        this.props.changeSellerName(id);
    }
    componentDidMount(){
    	// let id=this.props.params.id  //根据路由获取该商店id
    	// this.props.singleSellerCustomerNumInit(id);

    	let domLine = ReactDOM.findDOMNode(this.refs.singleSellerCustomerNumChart);
    	this.state.singleSellerCustomerNumChart = echarts.init(domLine);
        this.state.singleSellerCustomerNumChart.showLoading();

    	//定时刷新
		this.state.timer = setInterval(this.fetchData,this.state.timerTime)

        window.addEventListener('resize',this.resizeFun);
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.singleSellerCustomerNumChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.singleSellerCustomerNumChart.resize();
                   this.state.singleSellerCustomerNumChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUpdate(nextProps,nextState){
          // 判断请求回来时是否刚好换了商家，也就是防止上一个fetch数据合并到下一个商家里。这里处理还是ShouldComponentUpdate？
        // if(this.props.params !== nextProps.params){
        //     return;
        // }else{
        //     // this.setState({
        //         //改变商家名字
        // debugger
        
        //         // this.state.name=nextProps.customerNum.get('name');
        //     // })
        // }
    }
	componentDidUpdate(){
        
	}
    componentWillReceiveProps(nextProps,nextState){
      /*用上次存的路由和这次比较，不为空且不同的话表示在不同商家间跳转*/
        if(this.state.param && this.state.param !== nextProps.params.id){
            clearInterval(this.state.timer);
            this.props.singleSellerCustomerNumInit(nextProps.params.id);
            this.setState({timer:setInterval(this.fetchData,this.state.timerTime)});
            this.props.changeSellerName(nextProps.params.id);
        }
        //根据服务器传回数据显示商家名，现在是以根据路由名字显示
        // this.props.changeSellerName(this.props.customerNum.get('name'));
        // debugger
        // this.state.param=this.props.params.id;
        let customerNum = nextProps.customerNum.toJS();
        if(customerNum.series[0] && customerNum.series[0].data[0]){
            let now={numLen:'',num:'',doorNumLen:'',doorNum:'',percentLen:'',percent:''};
            let yesterday=customerNum.xAxis[0].yesterday;
            //四个分别是时间、客流量、门前客流、客流占比
            let timeList=customerNum.xAxis[0].data.reverse();
            let numList=customerNum.series[0].data.reverse();
            let doorNumList=customerNum.series[1].data.reverse();
            let percentList=customerNum.series[2].data.reverse();

            now.numLen=numList.length;
            now.num=numList[now.numLen-1];
            now.doorNumLen=doorNumList.length;
            now.doorNum=doorNumList[now.doorNumLen - 1];
            now.percentLen=percentList.length;
            now.percent=percentList[now.percentLen - 1];
            this.setState({now,yesterday,timeList,numList,doorNumList,percentList});
            
            this.setState({param:nextProps.params.id})
            this.state.singleSellerCustomerNumChart.setOption(customerNum);
            this.state.singleSellerCustomerNumChart.hideLoading();
        }
        
        
    }
	componentWillUnmount(){
		console.log('componentWillUnmount...')
		clearInterval(this.state.timer);
		this.state.singleSellerCustomerNumChart.dispose()
        window.removeEventListener('resize',this.resizeFun);

	}
	fetchData = ()=>{
		// debugger
	
		this.props.singleSellerCustomerNumFetch(this.props.params.id)
	}
    render(){
        let {now,yesterday,timeList,numList,doorNumList,percentList,tableSpace} = this.state;
        let rows=[];
        if(timeList){
            timeList.forEach((item,i)=>{
                if(!(i%tableSpace)){
                    rows.push(<tr key={i}><td>{timeList[i]}</td><td>{doorNumList[i]}</td><td>{numList[i]}</td><td>{percentList[i]}%</td></tr>)
                }
            })
        }


    	return <div className="panelWrapper">
             {/*<p>{this.state.name}</p>*/}
             <div className='topMessage'>
                <div className='message message1'><div>
                    <p>当前人数：{now.num} {/* {+''=='true'?<span className='up'>&nbsp;↑</span> :<span className='down'>&nbsp;↓</span>} */}</p>
                    <p>昨日此时人数：</p>
                </div></div>
                <div className='message message2'><div>
                    <p>昨日高峰客流：{yesterday.num}</p>
                    <p>昨日平均客流：</p>
                </div></div>
                <div className='message message3'><div>
                    <p>昨日高峰出现时间：{yesterday.time}</p>
                </div></div>
            </div>
    		<div className="panel">
    			<div className="panelHead">实时客流量&nbsp;<FaQuestion className='questionMark' />
                <div className='messageMark'><p>展示商家实时客流量、门前客流量及客流总体占比<br /><strong>客流量</strong>：当前在店铺内的人数<br /><strong>门前客流量</strong>：经过店铺门口的人数<strong>客流总体占比</strong>：店铺内的人数占整个商城的人数比例</p></div></div>
    			<div className="panelBody">
    				<div className="singleSellerCustomerNumChart" ref="singleSellerCustomerNumChart"></div>
                </div>
    		</div>
            <div className='panel'>
                <div className='panelHead'>当前实时客流数据</div>
                <div className='panelBody'>
                     <table className="Table">
                        <thead>
                            <tr><th>时间</th><th>门前客流量</th><th>店铺客流量</th><th>客流总体占比</th></tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*
            <div className="panel">
                <div className="panelHead">商家简介</div>
                <div className="panelBody">
                    <div className="singleSellerIntroduction" ref="singleSellerIntroduction"></div>
                </div>
            </div>
            */}
    	</div>
    }
}
const mapStateToProps = (state)=>({
        customerNum:state.getIn(['b','customerNum'])
})

let Chart=connect(mapStateToProps,sellersAction)(_Chart);
export default Chart;