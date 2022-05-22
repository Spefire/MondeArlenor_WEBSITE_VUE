module.exports = {
  devServer: {
    proxy: {
      "^/.netlify/functions": {
        target: "http://localhost:9000",
        changeOrigin: true,
        secure:false,
        pathRewrite: {"^/.netlify/functions": "/.netlify/functions"},
        logLevel: "debug" 
      },
    }
  }
};