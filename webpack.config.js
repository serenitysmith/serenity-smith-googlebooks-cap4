// This file is used to configure the webpack bundler
const webpack = require("@node.js/webpack");

module.exports = (env) => {

 
  env.appComponents = (env.appComponents || []).concat(['./foreground-service.android'])
	
  webpack.init(env);

	

  webpack.Utils.addCopyRule('data/**')
  webpack.Utils.addCopyRule('files/**')
  webpack.Utils.addCopyRule('**/*.db')

  webpack.mergeWebpack({
    resolve: {
      fallback: {
        assert: require.resolve("assert/"),
        browserify: false,
        buffer: require.resolve("buffer/"),
        child_process: false, 
        crypto: require.resolve("crypto-browserify"), 
        dns: false,
        fs: false,
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        http2: false,
        net: false,
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        querystring: require.resolve("querystring-es3"),
        request: false,
        stream: require.resolve("stream-browserify"),
        tls: false,
        tty: require.resolve("tty-browserify"),
        url: require.resolve("url/"),
        util: require.resolve("util/"),
        zlib: require.resolve("browserify-zlib"),
      },
    },
  });
};



