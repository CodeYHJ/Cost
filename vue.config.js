const path = require("path");
const pathFn = p => {
  return path.resolve(__dirname, p);
};
module.exports = {
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
