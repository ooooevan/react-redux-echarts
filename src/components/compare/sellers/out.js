import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import Calendar from '../../calendar';
// import '../../styles/calendar.scss';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

import compareAction from '../../../actions/compareAction';

class _sellersOut extends React.Component {

    static propTypes = {
        // out: React.PropTypes.func.isRequired,
        // // allSellersTableInit: React.PropTypes.func.isRequired,
        // lineAndBar:React.PropTypes.instanceOf(Immutable.Map),
        // table:React.PropTypes.instanceOf(Immutable.List)
      };

    constructor(props){
        super(props);
        this.state={
            compareSellerOutChart:'',
            resizeHandler:null,
            Data:[],
            selectTime:'day',
            // time:'',          //要请求的time参数，有多个
            seller1:'',           //商家1，用于显示图表的legend
            seller2:''              //商家2,用于显示图表的legend
        }
    }


    componentWillMount(){
        console.log('componentWillMount')



    }
    componentDidMount(){
        console.log('1componentDidMount');
    //  //this.props.allSellersTableInit();
    		// if(this.props.sellersAndTime){
    		// 	let dom = ReactDOM.findDOMNode(this.refs.compareSellerOutChart);
	     //    this.state.compareSellerOutChart = echarts.init(dom);
	     //    this.state.compareSellerOutChart.showLoading();
    		// }
        if(this.props.sellersAndTime.length>1){
            let arr=this.props.sellersAndTime.split('|');
            this.state.seller1=arr[0];
            this.state.seller2=arr[1];
            
            this.props.sellersOutInit(this.props.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerOutChart);
            this.state.compareSellerOutChart = echarts.init(dom);
            this.state.compareSellerOutChart.showLoading();
        }

        window.addEventListener('resize',this.resizeFun)
    }
    resizeFun = ()=>{
        if(this.state.resizeHandler){
                clearTimeout(this.state.resizeHandler);
            }
            if(this.state.compareSellerOutChart){
                this.state.resizeHandler = setTimeout(function () {
                   this.state.compareSellerOutChart.resize();
                }.bind(this), 100)
            }
    }
    componentWillUnmount(){
        console.log('1componentWillUnmount');
        this.state.compareSellerOutChart.dispose();
        window.removeEventListener('resize',this.resizeFun);
    // }
 //   
    }
    componentWillReceiveProps(nextProps,nextState){
    	// this.state.sellersList=nextProps.sellersList;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('1-=componentWillUpdate')
        //有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发
        if(nextProps.sellersAndTime  && nextProps.sellersAndTime !==this.props.sellersAndTime){
        	// 获取商家名存入state
        	let arr=nextProps.sellersAndTime.split('|');
        	this.state.seller1=arr[0];
        	this.state.seller2=arr[1];

        	this.props.sellersOutInit(nextProps.sellersAndTime);
        	let dom = ReactDOM.findDOMNode(this.refs.compareSellerOutChart);
	        this.state.compareSellerOutChart = echarts.init(dom);
	        this.state.compareSellerOutChart.showLoading();
        }
    }
    componentDidUpdate(){
        console.log('1..componentDidUpdate')
        let out=this.props.out.toJS();
        if(out.series[0].data && out.series[0].data[0]){
            out.legend.data.push(this.state.seller1,this.state.seller2);
            out.series[0].name = this.state.seller1;
            out.series[1].name = this.state.seller2;
            this.state.compareSellerOutChart.setOption(out);
            this.state.compareSellerOutChart.hideLoading();
        }

 //      
    }
    // componentWillReceiveProps(){
    // }
 
 
    render(){

    	

        let rows = [];
        console.log('...render');
        if(this.state.Data.series && this.state.Data.series[0].data){
            let sellerName=this.state.Data.xAxis[0].data;
            let sellerNum=this.state.Data.series[0].data;
            let sellerPer=this.state.Data.series[1].data;
            // debugger
            sellerName.forEach(function(item,index){
                rows.push(<tr key={index}><th>{index+1}</th><td>{item}</td><td>{sellerNum[index]}{sellerPer[index] > 0 ? <span className="up">&nbsp;↑</span>:<span className="down">&nbsp;↓</span>}</td><td className={sellerPer[index] > 0 ? 'up':'down'}>{sellerPer[index]}%</td></tr>);

            })
        }

        return <div>
      				<div className="panel">
                  <div className="panelHead">顾客跳出率对比</div>
                  <div className="panelBody">
                  <div ref="compareSellerOutChart" className="compareSellerOutChart"></div>
                  </div>
              </div>
							<div className='panel'>
  		    				<div className="panelHead">顾客跳出率信息</div>
  					    			<div className="panelBody">
  					    				<table className="Table">
              				<thead>
              					<tr><th>排名</th><th>商店名称</th><th>平均客流</th><th>环比增幅</th></tr>
              				</thead>
              				<tbody>
              				</tbody>
              			</table>
  								</div>
      				</div>
            </div>
    }
}
const mapStateToProps = (state)=>({
//     // console.log(state);
//     // debugger
//     // console.log(state.toJS());
        out:state.getIn(['d','sellersOut'])
//         // table:state.getIn(['b','table'])
})
let sellersOut=connect(mapStateToProps,compareAction)(_sellersOut);
export default sellersOut;

