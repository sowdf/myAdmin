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

var app = {
    data : {
        isAgree : false
    },
    submit : function(data){
        $.post('/api/register-save',{username:data.username,password:data.password,email:data.email},function(res){
            alert(res.msg);
            if(res.code == 100){
                location. href = '/login';
            }
        })
    }

};

class Register extends React.Component{

    constructor(props){
        super(props);
    }
    addMesHandle(){
        let userNmae = this.refs.input_username.value;
        let email = this.refs.input_email.value;
        let password = this.refs.input_password.value;
        let data = {
            username : userNmae,
            email : email,
            password : password
        };

        if (data.username == ''){
            alert('用户名不能为空');
            return false;
        }
        if (data.email == ''){
            alert('邮箱不能为空');
            return false;
        }
        if (data.password == ''){
            alert('密码不能为空');
            return false;
        }
        app.submit(data);
    }

    render(){
        return (
                <div>
                    <div>
                        <h1 className="logo-name">H+</h1>
                    </div>
                    <h3>欢迎注册 H+</h3>
                    <p>创建一个H+新账户</p>
                    <form className="m-t">
                        <div className="form-group">
                            <input type="text" className="form-control" ref="input_username" placeholder="请输入用户名" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" ref="input_email" placeholder="请输入email" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" ref="input_password" placeholder="请输入密码" required=""/>
                        </div>
                        <button type="button" className="btn btn-primary block full-width m-b" onClick={this.addMesHandle.bind(this)} >注 册</button>
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


