const webpack = require('webpack');
const path = require('path');
const buildPath = path.join(__dirname, 'build'); 

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';



module.exports = {
    entry: [
      './js/index.js'
    ],
    output: {
        path: buildPath, // Path of output file
        filename: 'bundle.js',
        publicPath: publicPath
      },
    resolve:{
      alias: {
        jquery: "jquery/src/jquery"
      }
    },
    module: {
        rules: [
            // "url" loader works like "file" loader except that it embeds assets
            // smaller than specified limit in bytes as data URLs to avoid requests.
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            { test: /\.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query:
              {
                presets:['es2015', 'react'],
                plugins: ['transform-object-rest-spread',
                          'transform-decorators-legacy'],
                cacheDirectory: true
              }
            },
            { test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.(woff|woff2)?$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
    ],
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    devServer: {
      historyApiFallback: true
    }

};
