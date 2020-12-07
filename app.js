var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("<h1>Chào tất cả mấy đứa!</h1>");
}
)
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

app.use(function (err, req, res, next) {
    res.status(500).send(err)
})
var port = process.env.PORT || 666;
app.listen(port, () => { console.log("Đang chạy trên cổng " + port + " nha mấy đứa :))"); })