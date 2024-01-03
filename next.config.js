/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
    webpack: (config, { webpack, isServer, nextRuntime }) => {
      // Avoid AWS SDK Node.js require issue
      if (isServer && nextRuntime === "nodejs")
        config.plugins.push(
          new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ })
        );
        config.plugins.push(
            new webpack.IgnorePlugin({ resourceRegExp: /^encoding$/ })
          );
      return config;
    },
    // …
  };
  
  module.exports = config;