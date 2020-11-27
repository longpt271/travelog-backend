module.exports = app => {
    var Mangxahoi = require('../controller/Mangxahoi');
    var router = require('express').Router();

    router.post("/", Mangxahoi.create);
    router.get('/', Mangxahoi.findall);
    router.get('/:id', Mangxahoi.findone);
    router.delete('/:id', Mangxahoi.delete);
    router.put('/:id', Mangxahoi.update);

    app.use("/mangxahois", router);
}