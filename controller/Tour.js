var Tour = require('../models').Tour;
var DichvuTour = require('../models').DichvuTour;
var TourNgaydi = require("../models").TourNgaydi;
var DichvuTour = require("../models").DichvuTour;
var Anh = require("../models").Anh;
var Binhluan = require("../models").Binhluan;
var Diadiem = require("../models").Diadiem;
exports.create = (req, res) => {
    Tour.create(req.body, { include: [Anh] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    Tour.findAll({ include: [Anh, Diadiem] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findone = (req, res) => {
    Tour.findOne({ where: { id: req.params.id }, include: [Anh] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    Tour.destroy({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    Tour.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.adddichvu = (req, res) => {
    DichvuTour.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.addloaitour = (req, res) => {
    TourLoaitour.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.addNgaydi = (req, res) => {
    TourNgaydi.create(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
