import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'expose?$!jquery';
import '../css/bootstrap.min.css'
import '../css/font-awesome.css';
import '../css/plugins/iCheck/custom.css';
import '../css/animate.css';
import '../css/style.css';
import '../js/bootstrap.min.js';

var app = {
    submit : function(data){
        $.getJSON()
        $.post('/api/login-post',{email:data.email,password:data.password},function(res){
            if(res.code == 100){
                location.href = '/';
            }
            alert(res.msg);
        });
    }
};




class Login extends React.Component{
    clickHandle (){
        var data = {};
        var email = this.refs.input_email.value;
        var password = this.refs.input_password.value;
        if(email == ''){
            alert('请输入邮箱');
            return false;
        }
        if(password == ''){
            alert('请输入密码');
            return false;
        }
        data = {
            email : email,
            password : password
        };
        app.submit(data);
    }
    render(){
        return (
            <div>
                <div>
                    <h1 className="logo-name">h</h1>
                </div>
                <h3>欢迎使用 hAdmin</h3>

                <form className="m-t">
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="email" ref='input_email' required=""/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="密码" ref='input_password' required=""/>
                    </div>
                    <button type="button" className="btn btn-primary block full-width m-b" onClick={this.clickHandle.bind(this)}>登 录</button>

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

