var express = require('express');
var home = require('../app/routes/home');

module.exports = () => {
    var app = express();
    app.set('port', process.env.PORT);
    
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    home(app);
    
    return app;
};