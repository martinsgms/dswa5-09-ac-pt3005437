var controller = require('../controllers/home')();

module.exports = app => {
    app.get('/index', controller.index);
    app.get('/', controller.index);
}