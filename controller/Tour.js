var Tour = require('../models').Tour;
var DichvuTour = require('../models').DichvuTour;
var TourNgaydi = require("../models").TourNgaydi;
var DichvuTour = require("../models").DichvuTour;
var Anh = require("../models").Anh;
exports.create = (req, res) => {
    Tour.create(req.body, { include: [Anh] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findall = (req, res) => {
    Tour.findAll({ include: [Anh] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.findone = (req, res) => {
    Tour.findOne({ where: { id: req.params.id }, include: [Anh] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.delete = (req, res) => {
    Tour.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.update = (req, res) => {
    Tour.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.adddichvu = (req, res) => {
    DichvuTour.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.addloaitour = (req, res) => {
    TourLoaitour.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
exports.addNgaydi = (req, res) => {
    TourNgaydi.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        res.json({ er: er })
    })
}
