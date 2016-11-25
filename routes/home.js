var register = require('../servers/register');

module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{title:12312});

    });
    app.get('/home',function(req,res){
        res.render('home',{title:123});
    });
    /* 注册 */
    app.get('/register',register.get);

    app.get('/register-save',register.save);
}