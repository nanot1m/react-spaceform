module.exports = {
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, ".md");
  },
  defaultExample: "guides/DefaultExample.md",
  sections: [
    {
      content: "guides/Readme.md"
    },
    {
      components: "src/[A-Z]*.js",
      ignore: ["**/src/FormContext.js"]
    },
    {
      name: "Examples",
      content: "guides/Example.md"
    }
  ],
  showSidebar: false,
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
