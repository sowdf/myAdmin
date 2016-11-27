var db = require('../db/login');
var crypto = require('crypto');

module.exports.get = function(req,res){
    res.render('login',{title:'登陆'});
};


module.exports.psot = function(req,res){
    var md5 = crypto.createHash('md5');
    var email = req.body.email;
    var password = md5.update(req.body.password).degin('hex');

    db.queryUserInfo(email,function(err,data){
        if(err) return console.log(err);
        if(data[0].password == password && data[0].email == email){
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