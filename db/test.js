var login = require('./login');
login.queryUserInfo('czhui',function(err,data){
   console.log(data);
});