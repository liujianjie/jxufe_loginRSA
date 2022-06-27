//RSA加密
const {
    RSAKey
} = require("./tools/rsa");

var rsa = new RSAKey();
//如果下面二个参数变动了,就去官网看看源代码就可以
var n = "5598e3b75d21a2989274e222fa59ab07d829faa29b544e3a920c4dd287aed9302a657280c23220a35ae985ba157400e0502ce8e44570a1513bf7146f372e9c842115fb1b86def80e2ecf9f8e7a586656d12b27529f487e55052e5c31d0836b2e8c01c011bca911d983b1541f20b7466c325b4e30b4a79652470e88135113c9d9";
var e = "10001";

//密码加密
rsa.setPublic(n, e);
var encodedPassword = rsa.encrypt('123456789');
console.log(encodedPassword);
