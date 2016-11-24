var connection = require('../config/server');


var user={username:'zhangsan',password:'pwdzhangsan',email:'zhangsan@gmail.com',reg_time : ''};
connection.query('insert into users set ?', user, function(err, result) {
    if (err) throw err;

    console.log('inserted zhangsan');
    console.log(result);
    console.log('\n');
});