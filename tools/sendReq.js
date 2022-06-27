
const axios = require('axios');
const qs = require('qs');

 function sendReq(username, password) {
    var data = qs.stringify({
        'username': username,
        'password': password,
        'errors': '0',
        'imageCodeName': '',
        '_rememberMe': 'on',
        'cryptoType': '1',
        'lt': '_c03B28E6E-86ED-CF4C-C037-C2635F754401_k76F0F835-817F-C92C-F327-C1323FD73968',
        '_eventId': 'submit'
    });
    var config = {
        method: 'post',
        url: 'https://ssl.jxufe.edu.cn/cas/login',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'Origin': 'https://ssl.jxufe.edu.cn',
            'Referer': 'https://ssl.jxufe.edu.cn/cas/login',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    return axios(config);
}

module.exports = {
    sendReq
}