function MySql (){
    this.client = require('mysql');
    this.connection = null;
    this.config = null;

    this.mysql = true;
    this.name = 'mysql';
}

MySql.prototype.connect = function(options,done){
    this.connection = this.client.createConnection(options);
    this.connection.connect(function(err){
        if(err) return done(err);
        this.config = this.connection.config;
        this.config.schema = this.config.database;
        done();
    }.bind(this));

    this.connection.on('error',function(err){
        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            this.handleDisconnect(options);
        }
        else throw err;
    }.bind(this));
};

MySql.prototype.end = function(){
    this.connection.end(function(err){
        if(err) throw  err;
    });
};


MySql.prototype.handleDisconnect = function(options){
  setTimeout(function(){
      this.connect(options,function(err){
          err && this.handleDisconnect(options);
      }.bind(this));
  }.bind(this),2000);
};

MySql.prototype.query = function(sql,done){
    this.connection.query(sql,function(err,rows){
        if(err) return done(err);
        done(null,rows);
    })
};


MySql.prototype.getColumnsInfo = function (data) {
    var columns = {};
    for (var key in data) {
        var column = data[key];
        columns[column.Field] = {
            type: column.Type,
            allowNull: column.Null === 'YES' ? true : false,
            key: column.Key.toLowerCase(),
            defaultValue: column.Default
            // extra: column.Extra
        };
    }
    return columns;
};

module.exports = new MySql();
