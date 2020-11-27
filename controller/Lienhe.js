var Lienhe = require('../models').Lienhe;
exports.create = (req, res) => {
    Lienhe.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findall = (req, res) => {
    Lienhe.findAll().then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    Lienhe.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    Lienhe.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    Lienhe.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
