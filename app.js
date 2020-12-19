var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
// const jwt = require('jsonwebtoken')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("<h1>Chào tất cả mấy đứa!</h1>");
}
)
require('./routes/login')(app);
// app.use(function (req, res, next) {
//     if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLowerCase() === 'bearer') {
//         var token = req.headers.authorization.split(' ')[1];
//         jwt.verify(token, 'vankien', function (err, decode) {
//             if (err) {
//                 return res.status(403).send({
//                     message: 'token loi roi'
//                 })
//             } else {
//                 return next();
//             }
//         })
//     } else {
//         return res.status(403).send({
//             message: 'UN'
//         });
//     }
// });
require("./routes/user")(app);
require("./routes/Tag")(app);
require("./routes/Quocgia")(app);
require("./routes/Tintuc")(app);
require("./routes/Tour")(app);
require("./routes/Ngaydi")(app);
require("./routes/Loaitour")(app);
require("./routes/Mangxahoi")(app);
require("./routes/Diadiem")(app);
require("./routes/Binhluan")(app);
require("./routes/Anh")(app);
require("./routes/Dichvu")(app);
require("./routes/Hoadon")(app);
require("./routes/TintucTag")(app);
require("./routes/Role")(app);
require("./routes/Lienhe")(app);
require("./routes/Camnangdulich")(app);

app.use(function (err, req, res, next) {
    res.status(500).send(err)
})
var port = process.env.PORT || 666;
app.listen(port, () => { console.log("Đang chạy trên cổng " + port + " nha mấy đứa :))"); })