var Ngaydi = require('../models').Ngaydi;
exports.create = (req, res) => {
    Ngaydi.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findall = (req, res) => {
    Ngaydi.findAll().then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    Ngaydi.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    Ngaydi.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    Ngaydi.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
