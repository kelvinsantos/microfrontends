const NextFederationPlugin = require("@module-federation/nextjs-mf");
module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home", // represents the name of the current module (or "app") that will expose certain code and interact with remotes.
        filename: "static/chunks/remoteEntry.js", // specifies the filename for the remote entry script. This is where the module federation exposes its remote modules for other apps to consume.
        dts: false, // this option determines whether to generate TypeScript declaration files (.d.ts) for the exposed modules.
        exposes: {
          // this defines which modules or components from the current app (in this case, "home") will be exposed to other apps via module federation.
          "./utils": "./utils",
        },
        remotes: {
          // this is where you define the other apps that your current app (in this case, "home") will interact with and consume modules from.
          shop: `shop@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          checkout: `checkout@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
        },
        shared: {
          "@fortawesome/fontawesome-svg-core": {
            singleton: true, // ensures that only one instance of this package is used across all modules
            eager: true, // eager loading ensures this is loaded upfront
          },
          "@fortawesome/free-brands-svg-icons": {
            singleton: true,
            eager: true,
          },
          "@fortawesome/free-regular-svg-icons": {
            singleton: true,
            eager: true,
          },
          "@fortawesome/free-solid-svg-icons": {
            singleton: true,
            eager: true,
          },
          "@fortawesome/react-fontawesome": {
            singleton: true,
            eager: true,
          },
          bootstrap: {
            singleton: true,
            eager: true,
          },
          formik: {
            singleton: true,
            eager: true,
          },
          "react-responsive-carousel": {
            singleton: true,
            eager: true,
          },
        }, // this option specifies the shared dependencies between your app and the remote modules.
        extraOptions: {
          // this is a configuration for additional options for the NextFederationPlugin.
          exposePages: true,
        },
      })
    );

    return config;
  },
};
