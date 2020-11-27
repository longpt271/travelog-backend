var Tintuc = require('../models').Tintuc;
var Tag = require('../models').Tag;
var TintucTag = require("../models").TintucTag;
exports.create = (req, res) => {
    Tintuc.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findall = (req, res) => {
    Tintuc.findAll({ include: [Tag] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    Tintuc.findOne({ include: [Tag] }, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    Tintuc.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    Tintuc.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.addtag = (req, res) => {
    TintucTag.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })

}