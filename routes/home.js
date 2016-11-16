module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{title:123});
    });

    app.get('/home',function(req,res){
        res.render('home',{title:123});
    });
}