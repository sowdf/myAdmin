import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'expose?$!jquery';
import '../css/bootstrap.min.css'
import '../css/font-awesome.css';
import '../css/plugins/iCheck/custom.css';
import '../css/animate.css';
import '../css/style.css';
import '../js/bootstrap.min.js';


class Login extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h1 className="logo-name">h</h1>
                </div>
                <h3>欢迎使用 hAdmin</h3>

                <form className="m-t" role="form" action="index.html">
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="用户名" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="密码" required=""/>
                    </div>
                    <button type="submit" className="btn btn-primary block full-width m-b">登 录</button>

                    <p className="text-muted text-center"> <a href="login.html#"><small>忘记密码了？</small></a> | <a href="register.html">注册一个新账号</a>
                    </p>

                </form>
            </div>
        );
    };
};

var div = document.createElement('div');
div.className = 'middle-box text-center loginscreen  animated fadeInDown';
document.body.appendChild(div);

ReactDOM.render(<Login/>,div);

