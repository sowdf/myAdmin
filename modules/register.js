var connection = require('../config/server');

function Register(data){
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.reg_time = data.reg_time;
}
Register.prototype.add = function(callback){
    var user={username:this.username,password:this.password,email:this.email,reg_time:this.reg_time};
    connection.query('insert into users set ?', user, function(err, result) {
        if(err){
            callback(err);
            return;
        }
        callback(null,'success');
        console.log(result);
        console.log('\n');
    });
};

Register.prototype.query = function(callback){
    var key = this.email;
    connection.query('select * from users where find_in_set("'+key +'",email)', function(err, rows, fields) {
        if(err){
            callback(err);
            return false;
        }
        if(rows.length == 0){
            callback(err,null);
            return false;
        }
        callback(err,rows);
    });
}

module.exports = Register;
