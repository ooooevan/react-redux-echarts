/**
 * Created by HH on 2017/3/14.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class Login extends React.Component {
    constructor(props){
        super(props);
    }



    render(){

        return <div className="loginWapper">
            <ul className="loginBtn">
                <li><a href="javascript:">登录</a></li>
            </ul>
        </div>

    }


}

export default Login;