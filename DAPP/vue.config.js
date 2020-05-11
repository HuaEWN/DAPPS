module.exports = {
    devServer: {
        host:"localhost",//要设置当前访问的ip 否则失效
        open: true, //浏览器自动打开页面
        proxy: {
            '/api': {
            target: 'https://dapp.quxiangyuntui.com/index.php/api',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
        }
      }
    },
    pubilcPath:'./',
  }
