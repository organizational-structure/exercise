module.exports ={
    lintOnSave:false,//关闭语法检查
    //第一种方式
    /* devServer: {
        proxy: 'http://localhost:5000'
    } */
    //第二种方式
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            pathRewrite:{'^/api':''},
            ws: true,
            changeOrigin: true
          },
          '/foo': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/foo':''},
            ws: true,
            changeOrigin: true
          }
        }
      }
}