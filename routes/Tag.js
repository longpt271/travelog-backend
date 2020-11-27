module.exports = app => {
    var Tag = require('../controller/Tag');
    var router = require('express').Router();

    router.post("/", Tag.create);
    router.get('/', Tag.findall);
    router.get('/:id', Tag.findone);
    router.delete('/:id', Tag.delete);
    router.put('/:id', Tag.update);

    app.use("/tags", router);
}