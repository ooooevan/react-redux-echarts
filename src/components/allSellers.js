
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';



import sellersAction from '../actions/sellersAction';

class _Chart extends React.Component {

    static propTypes = {
        allSellersLineChartInit: React.PropTypes.func.isRequired,
        allSellersTableInit: React.PropTypes.func.isRequired,
        b: React.PropTypes.object.isRequired       //包含lineAndBar和table的数据
      };

    constructor(props){
        super(props);
        this.state={
			allSellersLineChart:'',  //全部商家图表
        	allSellersLineOption:'',    //option参数
            chartPage:1,       //按页分开商家数据，第一页
			table:[]
		}

    }



    componentWillMount(){
      console.log('componentWillMount')
		this.props.allSellersTableInit();
        this.props.allSellersLineChartInit(this.state.chartPage);

    }
	componentDidMount(){
    	console.log('componentDidMount');
		//this.props.allSellersTableInit();
        let domLine = ReactDOM.findDOMNode(this.refs.allSellersLineChart);

        this.state.allSellersLineChart = echarts.init(domLine);
        this.state.allSellersLineChart.showLoading();

	}
	componentWillUnmount(){
		console.log('componentWillUnmount');
		this.state.allSellersLineChart.dispose();   //销毁实例
	}
	componentWillReceiveProps(){
		// debugger;
        // this.setState({
        //     allSellersLineOption:this.props.b.lineAndBar
        // })
		this.state.allSellersLineOption=this.props.b.lineAndBar;    //获取参数
		//获取表格数据
		this.state.table = this.props.b.table;
		this.state.allSellersLineChart.setOption(this.state.allSellersLineOption);
        this.state.allSellersLineChart.hideLoading()
		// console.log(this.state.allSellersLineOption);
	}
    turnLeft = ()=>{
        if(this.state.chartPage<=1){
            return;
        }
        this.state.chartPage -= 1;
        this.props.allSellersLineChartInit(this.state.chartPage);
    }
    turnRight = ()=>{
        this.state.chartPage +=1;
        //获取下一页商家数据
        this.props.allSellersLineChartInit(this.state.chartPage);
    }


    render(){
		var rows = [];
		if(this.state.table){
			this.state.table.forEach(function(item,index){
				rows.push(<tr key={index}><th>{index+1}</th><td>{item.name}</td><td>{item.num}{item.increase == 'true'? <span className="up">&nbsp;↑</span>:<span className="down">&nbsp;↓</span>}</td><td className={item.increase == 'true'? 'up':'down'}>{item.percent}%</td></tr>);

			})
		}



        return <div className="chartWrapper">

        	<div className="panel">
        		<div className="panelHead">商家客流排名</div>
        		<div className="panelBody">
                <div className="allSellersLineChartBtn">
                    <button onClick={this.turnLeft}><i className="fa fa-chevron-left"></i></button>
                    <button onClick={this.turnRight}><i className="fa fa-chevron-right"></i></button>
                </div>
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
						{rows}
        				</tbody>
        			</table>
        		</div>
        	</div>
        </div>
    }

}
let Chart=connect(state=>state,sellersAction)(_Chart);
export default Chart;

