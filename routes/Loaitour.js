module.exports = app => {
    var loaitour = require('../controller/loaitour');
    var router = require('express').Router();

    router.post("/", loaitour.create);
    router.get('/', loaitour.findall);
    router.get('/:id', loaitour.findone);
    router.delete('/:id', loaitour.delete);
    router.put('/:id', loaitour.update);

    app.use("/loaitours", router);
}