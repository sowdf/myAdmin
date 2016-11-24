var connection = require('../config/server');

connection.query('select * from users where find_in_set("zhangsan@gmail.com",email)', function(err, rows, fields) {
    if(err){
        console.log(err);
        return false;
    }

    console.log(rows);


    console.log('\n');

});

module.exports.query = function(key){
    connection.query('select * from users where find_in_set("'+key +'","email")', function(err, rows, fields) {
        if(err){
            console.log(err);
            return false;
        }

        console.log(rows);


        console.log('\n');

    });
};


module.exports.delete = function(){

};

module.exports.change = function(){

};


module.exports.add = function(){

    var user={username:'zhangsan',password:'pwdzhangsan',email:'zhangsan@gmail.com',reg_time : ''};
    connection.query('insert into users set ?', user, function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        console.log('inserted zhangsan');
        console.log(result);
        console.log('\n');
    });
}
