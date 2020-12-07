module.exports = app => {
    var TintucTag = require('../controller/TintucTag');
    var router = require('express').Router();

    router.post("/", TintucTag.create);
    router.get('/', TintucTag.findall);
    router.get('/:id', TintucTag.findone);
    router.delete('/:id', TintucTag.delete);
    router.patch('/:id', TintucTag.update);

    app.use("/tintuctags", router);
}