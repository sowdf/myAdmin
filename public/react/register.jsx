import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'expose?$!jquery';
import '../css/bootstrap.min.css'
import '../css/font-awesome.css';
import '../css/plugins/iCheck/custom.css';
import '../css/animate.css';
import '../css/style.css';
import '../js/bootstrap.min.js';
import '../js/plugins/iCheck/icheck.min.js';

class Register extends React.Component{
    render(){
        return (
                <div>
                    <div>

                        <h1 className="logo-name">H+</h1>

                    </div>
                    <h3>欢迎注册 H+</h3>
                    <p>创建一个H+新账户</p>
                    <form className="m-t" role="form" action="login.html">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="请输入用户名" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="请输入密码" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="请再次输入密码" required=""/>
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox i-checks">
                                <label className="no-padding">
                                    <input type="checkbox"/><i></i> 我同意注册协议</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">注 册</button>

                        <p className="text-muted text-center"><small>已经有账户了？</small><a href="login.html">点此登录</a>
                        </p>

                    </form>
                </div>
        )
    }
}
var div = document.createElement('div');
div.className = 'middle-box text-center loginscreen   animated fadeInDown';
document.body.appendChild(div);
ReactDOM.render(<Register/>,div);


$(document).ready(function () {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
});


