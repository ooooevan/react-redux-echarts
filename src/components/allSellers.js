
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import echarts from 'echarts';
import sellersAction from '../actions/sellersAction';

class _Chart extends React.Component {
    constructor(props){
        super(props);
        this.state={
					allSellersLineChart:'',  //全部商家图表
        	allSellersLineOption:''    //option参数
        }

    }
    componentWillMount(){
      console.log('componentWillMount')
    }
		componentDidMount(){
			console.log('componentDidMount');
			this.props.allSellersLineChartInit();
      let domLine = ReactDOM.findDOMNode(this.refs.allSellersLineChart);

      this.state.allSellersLineChart = echarts.init(domLine);

		}
		componentWillUnmount(){
			console.log('componentWillUnmount');
			this.state.allSellersLineChart.dispose()   //销毁实例
		}
		componentWillReceiveProps(){
			// debugger;
			this.state.allSellersLineOption=this.props.b.lineAndBar;    //获取参数
			this.state.allSellersLineChart.setOption(this.state.allSellersLineOption);
			console.log(this.state.allSellersLineOption);
		}

    render(){
        return <div className="chartWrapper">
        	<div className="panel">
        		<div className="panelHead">昨日商家客流</div>
        		<div className="panelBody">
        			<div ref="allSellersLineChart" className="allSellersLineChart"></div>
        		</div>

        	</div>

        	<div className="panel">
        		<div className="panelHead">商家排名</div>
						<div className="panelBody">
        			<table className="allSellersTable">
        				<thead>
        					<tr><th>排名</th><th>商店名称</th><th>平均客流</th><th>环比增幅</th></tr>
        				</thead>
        				<tbody>
        				<tr><th>1</th><td>淘宝</td><td>600</td><td>1%</td></tr>
        				<tr><th>2</th><td>马云</td><td>500</td><td>2%</td></tr>
        				<tr><th>3</th><td>app</td><td>400</td><td>0%</td></tr>
        				<tr><th>3</th><td>223</td><td>200</td><td>3%</td></tr>
        				</tbody>
        			</table>
        		</div>
        	</div>
        </div>
    }

}
let Chart=connect(state=>state,sellersAction)(_Chart);
export default Chart;

