module.exports = app => {
    const user = require('../controller/login');

    var router = require('express').Router();

    router.post('/', user.findAll);

    app.use('/login', router);
}