

module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{title:12312});

    });
    app.get('/home',function(req,res){
        res.render('home',{title:123});
    });
}