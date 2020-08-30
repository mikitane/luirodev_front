const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new CompressionPlugin()],

    resolve: {
      alias : {
        "icons": path.resolve(__dirname, "node_modules/vue-material-design-icons")
      },
      extensions: [
        ".vue"
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use "@/scss/_variables.scss";
          @use "@/scss/_mixins.scss";
        `
      },
    }
  },
};