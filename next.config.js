// next.config.js
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.d\.ts$/,
        loader: 'ignore-loader',
      });
  
      return config;
    },
  };
  