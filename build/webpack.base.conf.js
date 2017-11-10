"use strict"
const path = require("path")
const utils = require("./utils")
const config = require("../config")
const vueLoaderConfig = require("./vue-loader.conf")

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, "..", dir)
}

const VENDOR_LIBS = ['jquery', 'vue', 'vue-router', './static/metronic/global/plugins/bootstrap/js/bootstrap.min.js']
const LADDA = ['ladda']


module.exports = {
  entry: {
    app: './src/main.js',
    vendor: VENDOR_LIBS,
    metronic: ['./static/metronic/metronic.js', './static/metronic/metronic.css'],
    ladda: LADDA
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath: process.env.NODE_ENV === "production"
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
			"@": resolve("src"),
			jquery: "jquery/src/jquery",
			$: "jquery/src/jquery"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [resolve("src"), resolve("test")],
        options: {
          formatter: require("eslint-friendly-formatter")
				}
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("test")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin()]
}
