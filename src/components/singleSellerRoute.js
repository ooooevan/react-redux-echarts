
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect,Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link ,Redirect} from 'react-router';

class Chart extends React.Component {

    static propTypes = {
        params: React.PropTypes.object.isRequired       //
    };
    constructor(props){
        super(props);

    }
    componentWillMount(){
      // console.log('componentWillMount')
    }
    componentDidMount(){
         // console.log('componentDidMount');
         console.log(this.props)

    }
    componentWillUnmount(){
        // console.log('componentWillUnmount');
    }
    componentWillReceiveProps(){
    }
 


    render(){
        let nowUrl='/sellers/'+this.props.params.id+'/now';
        let historyUrl='/sellers/'+this.props.params.id+'/history';
        return <div className="chartWrapper">
            <div className="singleSellerRoute">
                <ul>
                    <li><Link to={nowUrl} activeClassName="active" draggable="false">实时客流</Link></li>
                    <li><Link to={historyUrl} activeClassName="active" draggable="false">历史数据</Link></li>
                </ul>
            </div>
            {this.props.children}
        </div>
    }

}
export default Chart;

