var _config = {
    key : "687b17f408a692556a50bae7ab218651",
    token : "eb59ff09aa165f88a0071c498ce132108c25fc370f6bb12464bc6435163765d0",
    id : '56d3e8db1842605e347a47f0'
}

var _url = {
    id : 'https://api.trello.com/1/cards/'+_config.id+'/actions?fields=all,checkItemStates&member_fields=Caozhihui&key='+_config.key+'&token='+_config.token,
    member:'https://api.trello.com/1/members/caozhihui?fields=username,fullName,url&boards=all&board_fields=name&organizations=all&organization_fields=displayName&key='+_config.key+'&token=' + _config.token,
    cards : 'https://api.trello.com/1/members/caozhihui/cards?fields=all&boards=all&board_fields=name   &organizations=all&organization_fields=displayName&key='+_config.key+'&token=' + _config.token
}

var request = require('request');



module.exports.getCards = function(req,res){
    request(_url.cards, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);
            res.json({
                code : 100,
                result : body,
                message : '查询成功'
            });
        }else{
            res.json({
                code : 99,
                result : {},
                message : error
            });
        }
    })

}