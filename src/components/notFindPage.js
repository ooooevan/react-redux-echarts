import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link,IndexLink ,Redirect,browserHistory} from 'react-router';

import '../styles/notFindPage.scss';

class NotFindPage extends React.Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(this.props.params)
	}
	render(){
		return <div className="notFindPage"> 
			<div className="errorMsg">
				<p>404</p>
			{/*这是注释*/}
					<i className='fa fa-times'></i>未找到页面
				<p>您可以点击<IndexLink to="/">返回首页</IndexLink></p>
			</div>
			

		</div>

	}
}

export default NotFindPage;