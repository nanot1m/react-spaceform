module.exports = {
  sections: [
    {
      content: "./README.md"
    }
  ],
  showSidebar: false,
  require: [require("path").resolve(__dirname, "styleguide.setup.js")],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!buble)/,
          loader: "babel-loader"
        }
      ]
    }
  }
};
