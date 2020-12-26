module.exports = app => {
    var checkuser = require('../controller/checkuser');
    var router = require('express').Router();

    router.get('/', checkuser.authen);


    app.use("/checkuser", router);
}