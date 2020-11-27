var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
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

var port = process.env.PORT || 666;
app.listen(port, () => { console.log("Đang chạy trên cổng " + port + " nha mấy đứa :))"); })