var _config = {
    key : "a8e66de6eba0413397da9b710a6fa022",
    token : "04aed13e5da8bca4a0d6e9168d04bacf3bb22997ead14b04531ee270a668575f",
    id : '4eea503d91e31d174600008f'
}

var request = require('request');




module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{title:12312});
        request('https://api.trello.com/1/cards/'+ _config.id +'?fields=name,idList&member_fields=fullName&key=['+_config.id +']&token=['+_config.token+']', function (error, response, body) {
            console.log(body);
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body);
            }
        })
    });
    app.get('/home',function(req,res){
        res.render('home',{title:123});
    });
}