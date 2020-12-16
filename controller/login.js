const User = require('../models').User;
// const jwt = require('jsonwebtoken')
exports.findAll = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findAll({
        where: { email: email, password: password }
    }).then(data => {
        if (data[0] !== undefined) {
            res.json("ok");
        } else {
            res.json("ko");
        }
        // if (data[0] !== undefined) {
        //     var token = jwt.sign({ ten: 'van kien' }, 'vankien', { algorithm: 'HS256', expiresIn: '3h' });
        //     res.json(token);
        // } else {
        //     res.json("LỖI");
        // }
    }
    ).catch(err => {
        res.json({ err: err.message })
    })
}