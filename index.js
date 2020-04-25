function withSVGComponent(baseConfig = {}) {
  return Object.assign({}, baseConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        use: [require.resolve('graphql-tag/loader')]
      });

      if (typeof baseConfig.webpack === "function") {
        return baseConfig.webpack(config, options);
      }

      return config;
    }
  });
};

module.exports = withSVGComponent;