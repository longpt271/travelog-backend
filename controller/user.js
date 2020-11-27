var User = require('../models').User;
var UserRole = require('../models').UserRole;
exports.create = (req, res) => {
    User.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findall = (req, res) => {
    User.findAll().then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    User.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    User.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.addrole = (req, res) => {
    UserRole.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}