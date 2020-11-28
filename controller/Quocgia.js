var Quocgia = require('../models').Quocgia;
var Diadiem = require('../models').Diadiem;
var db = require("../models");
exports.create = (req, res) => {
    var name = req.body.name;
    var namedd = req.body.Diadiems[0];
    // var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Quocgia.findOne({ where: { name: name } }).then((data) => {
        if (data) {
            Diadiem.create(namedd).then(dt => {
                res.json({ dt: dt })
            }).catch(er => {
                res.json({ er: er })
            })
        } else {
            Quocgia.create(req.body).then(dt => {
                res.json({ data: dt })
            }).catch(er => {
                res.json({ er: er })
            })
        }
    })
}
exports.findall = (req, res) => {
    Quocgia.findAll({ include: [Diadiem] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    Quocgia.findOne({ include: [Diadiem] }, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    Quocgia.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    Quocgia.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}