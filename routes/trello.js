var trello = require('../servers/trello');



module.exports = function(app){
    app.get('/  api/getCards',trello.getCards);
}