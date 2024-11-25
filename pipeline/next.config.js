const NextFederationPlugin = require("@module-federation/nextjs-mf");
module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pipeline",
        filename: "static/chunks/remoteEntry.js",
        dts: false,
        exposes: {
          "./pipeline": "./pages/index.js",
        },
        remotes: {
          home: `home@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          esign: `esign@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};
