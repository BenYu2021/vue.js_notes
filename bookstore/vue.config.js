module.exports = {
  devServer: {
    // api是后端数据接口的上下文路径
    proxy: {
      "/api": {
        // 后端数据接口地址
        target: "http://111.229.37.167/",
        // 允许跨域
        changeOrigin: true,
      },
    },
  },
};
