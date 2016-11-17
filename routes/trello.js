var trello = require('../servers/trello');



module.exports = function(app){
    app.get('/getCards',trello.getCards);
}