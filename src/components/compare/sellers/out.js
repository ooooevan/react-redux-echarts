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
            seller2:'',              //商家2,用于显示图表的legend
            num1List:'',
            num2List:'',
            percent1List:'',
            percent2List:''
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
            let sellers=this.props.sellersAndTime.split('/')[0].split(',');

            this.state.seller1=sellers[0];
            this.state.seller2=sellers[1];
            
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
    	if(nextProps.sellersAndTime  && nextProps.sellersAndTime !==this.props.sellersAndTime){
            // 获取商家名存入state
            let arr=nextProps.sellersAndTime.split('/');
            let sellers=arr[0].split(',');

            this.setState({seller1:sellers[0],seller2:sellers[1]});
            this.props.sellersOutInit(nextProps.sellersAndTime);
            let dom = ReactDOM.findDOMNode(this.refs.compareSellerOutChart);
            this.state.compareSellerOutChart = echarts.init(dom);
            this.state.compareSellerOutChart.showLoading();
        }
        let out=nextProps.out.toJS();
        if(out.series[0].data && out.series[0].data[0]){
            let timeList=out.xAxis[0].data;
            let num1List=out.xAxis[0].jumpNum1;
            let num2List=out.xAxis[0].jumpNum2;
            let percent1List=out.series[0].data;
            let percent2List=out.series[1].data;
            this.setState({timeList,num1List,num2List,percent1List,percent2List});

            out.legend.data.push(this.state.seller1,this.state.seller2);
            out.series[0].name = this.state.seller1;
            out.series[1].name = this.state.seller2;
            this.state.compareSellerOutChart.setOption(out);
            this.state.compareSellerOutChart.hideLoading();
        }

    }
    componentWillUpdate(nextProps,nextState){
        console.log('1-=componentWillUpdate')
        //有参数传入，才发送请求渲染图表。防止无限循环发送请求，要两次props对比，不同才发
        
    }
    componentDidUpdate(){
        console.log('1..componentDidUpdate')
        

 //      
    }
    // componentWillReceiveProps(){
    // }
 
 
    render(){

    	

        let {timeList,num1List,num2List,percent1List,percent2List,seller1,seller2} = this.state;
        let rows=[];
        if(timeList){
            timeList.forEach((item,i)=>{
              rows.push(<tr key={i}><td>{timeList[i]}</td><td>{num1List[i]}</td><td>{parseInt(percent1List[i])}%</td><td>{num2List[i]}</td><td>{parseInt(percent2List[i])}%</td></tr>)
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
                                <tr><th>时间</th><th>{seller1}跳出人数</th><th>跳出率</th><th>{seller2}跳出人数</th><th>跳出率</th></tr>
              				</thead>
              				<tbody>
                            {rows}
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

