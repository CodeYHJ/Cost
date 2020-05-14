const path = require("path");
const pathFn = p => {
  return path.resolve(__dirname, p);
};
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 32, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@com": pathFn("./src/components"),
        "@view": pathFn("./src/views"),
        "@less": pathFn("./src/less")
      }
    }
  }
};
