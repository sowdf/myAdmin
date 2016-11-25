var Register = require('../modules/register');
var crypto = require('crypto');

module.exports.get = function(req,res){
    res.render('register',{title:'注册'});


};

module.exports.save = function(req,res){
    var md5 = crypto.createHash();
    var password = md5.update(req.body.password).digest('hex');
    var reigster = new Register();

}