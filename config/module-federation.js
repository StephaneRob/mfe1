const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { UniversalFederationPlugin } = require("@module-federation/node");
console.log(deps.react);
module.exports = {
  client: new ModuleFederationPlugin({
    name: "mfe1",
    filename: "remoteEntry.js",
    exposes: {
      "./Root": "./src/Root",
    },
    shared: {
      react: {
        requiredVersion: deps.react,
        singleton: true,
      },
      "react-router-dom": {
        requiredVersion: deps["react-router-dom"],
        singleton: true,
      },
    },
  }),
  server: new UniversalFederationPlugin({
    name: "superButton",
    isServer: true,
    library: { type: "commonjs-module" },
    filename: "remoteEntry.js",
    exposes: {
      "./Root": "./src/Root",
    },
    shared: [],
  }),
};
