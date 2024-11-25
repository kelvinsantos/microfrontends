const NextFederationPlugin = require("@module-federation/nextjs-mf");
module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "esign",
        filename: "static/chunks/remoteEntry.js",
        dts: false,
        exposes: {
          "./esign": "./pages/index.js",
          "./doc": "./pages/d/[...slug].js",
        },
        remotes: {
          home: `home@http://localhost:3000/_next/static/chunk/remoteEntry.js`,
          pipeline: `pipeline@http://localhost:3002/_next/static/chunk/remoteEntry.js`,
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
