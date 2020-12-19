var User = require('../models').User;
var UserRole = require('../models').UserRole;
var Binhluan = require("../models").Binhluan;
exports.create = (req, res) => {
    User.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    User.findAll().then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findone = (req, res) => {
    User.findOne({ where: { email: req.params.email } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    User.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.addrole = (req, res) => {
    UserRole.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}