var mySql = require('./client');
var options = require('./config.json');

module.exports.queryUserInfo = function(email,callback){
    var sql = 'SELECT * FROM users WHERE email="'+email+'"';
    mySql.connect(options,function(){
        mySql.query(sql,callback);
        mySql.end();
    });
};

