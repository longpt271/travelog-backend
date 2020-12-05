module.exports = app => {
    var role = require('../controller/role');
    var router = require('express').Router();

    router.post("/", role.create);
    router.get('/', role.findall);
    router.get('/:id', role.findone);
    router.delete('/:id', role.delete);
    router.patch('/:id', role.update);

    app.use("/roles", router);
}