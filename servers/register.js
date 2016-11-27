var Register = require('../modules/register');
var crypto = require('crypto');

module.exports.get = function(req,res){
    res.render('register',{title:'注册'});
};

module.exports.save = function(req,res){
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('hex');
    var username = req.body.username;
    var email = req.body.username;
    var reg_time = getNowFormatDate();

    if(username == ""){
        resJson(98,'参数错误');
        return false;
    }
    if(password == ""){
        resJson(98,'参数错误');
        return false;
    }
    if(email == ""){
        resJson(98,'参数错误');
        return false;
    }
    var reigster = new Register({password:password,username:username,email:email,reg_time:reg_time});

    reigster.query(function(err,data){
        if(err){
            console.log(err);
            return false;
        }
        if(data){
            resJson(99,'该邮箱已被注册！');
            return false;
        }
        reigster.add(function(err,msg){
            if(err){
                console.log(err);
                return false;
            }
            resJson(100,'注册成功');
        });
        return false;
    });
    function resJson(code,msg,result){
        res.json({
            code : code,
            msg : msg
        });
    }
};



function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}