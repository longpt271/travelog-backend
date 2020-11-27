var Role = require('../models').Role;
exports.create = (req, res) => {
    Role.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findall = (req, res) => {
    Role.findAll().then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    Role.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    Role.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    Role.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
