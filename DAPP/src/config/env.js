//根据不同的环境更改不同的baseUrl
let baseUrl = 'https://dapp.quxiangyuntui.com/index.php/api/';

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'https://dapp.quxiangyuntui.com/index.php/api/';

} else if (process.env.NODE_ENV == 'production') {
    //baseUrl = '测试地址';
    //baseUrl = '预发布地址';
    baseUrl = 'https://dapp.quxiangyuntui.com/index.php/api/';
}

export {
    baseUrl,//导出baseUrl
}

