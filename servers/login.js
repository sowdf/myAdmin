var db = require('../db/login');
var crypto = require('crypto');

module.exports.get = function(req,res){
    res.render('login',{title:'登陆'});
};


module.exports.psot = function(req,res){
    var md5 = crypto.createHash('md5');
    var email = req.body.email;
    var password = md5.update(req.body.password).digest('hex');
    var user = {
        email:email,
        password:password
    };
    db.queryUserInfo(email,function(err,data){
        if(err) return console.log(err);
        if(data.length == 0) return resJson(99,'您输入的账号或者密码有误！');

        if(data[0].password == password && data[0].email == email){
            req.session.user = user;
            console.log(req.session);
            resJson(100,'登陆成功！');
            return false;
        }
        resJson(99,'您输入的账号或者密码有误！');
    });

    function resJson(code,msg,result){
        res.json({
            code : code,
            msg : msg
        });
    }
};

module.exports.logout = function(req,res){
    req.session.user = null;
};

module.exports.checkLogin = function(req,res,next){
    if(!req.session.user){
        return res.redirect('/login');
    }
    next();
};

module.exports.checkNotLogin = function(req,res,next){
    if(req.session.user){
        return res.redirect('back');
    }
    next();
};