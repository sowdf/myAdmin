var connection = require('../config/server');

function Register(userName,email,password){
    this.username = userName;
    this.email = email;
    this.password = password;
}
Register.prototype.add = function(){
    var user={username:this.username,password:this.password,email:this.email,reg_time : ''};
    connection.query('insert into users set ?', user, function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        console.log('inserted zhangsan');
        console.log(result);
        console.log('\n');
    });
};

Register.prototype.query = function(){
    connection.query('select * from users where find_in_set("'+key +'","email")', function(err, rows, fields) {
        if(err){
            console.log(err);
            return false;
        }

        console.log(rows);


        console.log('\n');

    });
}

module.exports = Register;
