var register = require('../servers/register');
var login = require('../servers/login');

module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{title:12312});

    });
    app.get('/home',function(req,res){
        res.render('home',{title:123});
    });
    /* 注册 */
    app.get('/register',register.get);

    app.post('/api/register-save',register.save);

    /* 登陆 */
    app.get('/login',login.checkNotLogin);
    app.get('/login',login.get);

    app.get('/login',login.checkNotLogin);
    app.post('/api/login-post',login.psot);

    /* 登出 */
    app.get('/logout',login.logout);


};