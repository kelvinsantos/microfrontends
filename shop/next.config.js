const NextFederationPlugin = require('@module-federation/nextjs-mf');
module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        filename: 'static/chunks/remoteEntry.js',
        dts: false,
        exposes: {
          './shop': './pages/index.js',
          './pdp': './pages/p/[...slug].js',
        },
        remotes: {
          home: `home@http://localhost:3000/_next/static/chunk/remoteEntry.js`,
          checkout: `checkout@http://localhost:3002/_next/static/chunk/remoteEntry.js`,
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
