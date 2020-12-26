var User = require('../models').User;
var Role = require('../models').Role;
exports.create = (req, res) => {
    User.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    User.findAll({ attributes: ['id', 'name', 'gioitinh', 'email', 'avatar', "diachi", "sdt", "ngaysinh"], order: [["id", "DESC"]], include: [Role] }).then(data => {
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
