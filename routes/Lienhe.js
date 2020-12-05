module.exports = app => {
    var lienhe = require('../controller/lienhe');
    var router = require('express').Router();

    router.post("/", lienhe.create);
    router.get('/', lienhe.findall);
    router.get('/:id', lienhe.findone);
    router.delete('/:id', lienhe.delete);
    router.patch('/:id', lienhe.update);

    app.use("/lienhes", router);
}