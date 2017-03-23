/**
 * Created by HH on 2017/3/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
// import echarts from 'echarts';

class _Chart extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return <div className="chartWrapper">二层客流</div>
    }

}
let Chart=connect(state=>state,null)(_Chart);
export default Chart;

