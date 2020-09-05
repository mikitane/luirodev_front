const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          options.limit = false;
          return options
        })
  },
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