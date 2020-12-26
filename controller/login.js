require("dotenv").config()
const User = require('../models').User;
const jwt = require('jsonwebtoken')
const Role = require("../models").Role;
const UserRole = require("../models").UserRole;
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findAll({
        where: { email: email, password: password },
        include: [Role]
    }).then(data => {
        if (data[0] !== undefined) {
            UserRole.findOne({ where: { userId: data[0].id } }).then(ok => {
                var userrole = ok.dataValues;
                var user = {
                    id: data[0].id,
                    email: data[0].email,
                    gioitinh: data[0].gioitinh,
                    diachi: data[0].diachi,
                    name: data[0].name,
                    avatar: data[0].avatar,
                    sdt: data[0].sdt,
                    ngaysinh: data[0].ngaysinh,
                    chamngon: userrole.chamngon,
                    website: userrole.website,
                    kynang: userrole.kynang,
                    facebook: userrole.facebook,
                    github: userrole.github,
                    role: data[0].Roles[0].name
                };
                var token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '3h' });
                res.json(token);
            }).catch(er => {
                throw er;
            })

        } else {
            res.json("err");
        }

        // if (data[0] !== undefined) {
        //     res.json("ok");
        // } else {
        //     res.json("ko");
        //}

    }
    ).catch(err => {
        res.json({ err: err.message })
    })
}