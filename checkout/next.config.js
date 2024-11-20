const NextFederationPlugin = require('@module-federation/nextjs-mf');
module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkout',
        filename: 'static/chunks/remoteEntry.js',
        dts: false,
        exposes: {
          './checkout': './pages/index.js',
        },
        remotes: {
          home: `home@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          shop: `shop@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      }),
    );

    return config;
  },
};
