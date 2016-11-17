var _config = {
    key : "687b17f408a692556a50bae7ab218651",
    token : "eb59ff09aa165f88a0071c498ce132108c25fc370f6bb12464bc6435163765d0",
    id : '5818768d7dba000936108b95'
}

var _url = {
    id : 'https://api.trello.com/1/cards/'+_config.id+'/actions?fields=badges,email,checkItemStates&member_fields=Caozhihui&key='+_config.key+'&token='+_config.token,
}

var request = require('request');

request(_url.id, function (error, response, body) {
    console.log(body);
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);
    }
})


module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{title:12312});

    });
    app.get('/home',function(req,res){
        res.render('home',{title:123});
    });
}