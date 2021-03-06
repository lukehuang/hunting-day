var path = require('path')

module.exports = {
  entry: {
    app: './src/main.js'    
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: 'static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'jquery': 'jquery/dist/jquery'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {    
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /(node_modules|static)/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|static)/
      }
    ],    
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /static/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|static)/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
  /*   
  externals: [
    (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ]*/
}
