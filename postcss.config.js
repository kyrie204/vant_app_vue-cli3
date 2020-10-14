module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['defaults', 'ios >= 6.0']
    },
    "postcss-pxtorem": {
      rootValue: 37.5, //37.5 75
      propList: ["*"],
      selectorBlackList: []
     }
  }
};
