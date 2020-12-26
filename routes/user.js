module.exports = app => {
    var User = require('../controller/user');
    var checkuser = require("../controller/checkUser")
    var router = require('express').Router();

    router.post("/", User.create);
    router.get('/', User.findall);
    router.get('/:email', User.findone);
    router.delete('/:id', User.delete);
    router.patch('/:id', User.update);

    app.use("/users", router);
}