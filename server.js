var express = require("express");
var app = express();
app.use("/", express.static(__dirname + "/"));
let port = 3002;
app.listen(port);
const url = 'http://localhost:3002'
console.log(`打开地址：${url}`);