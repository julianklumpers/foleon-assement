const path = require("path");

module.exports = (api) => {
  const presets = [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ["@babel/preset-react", { targets: { node: "current" } }],
  ];

  const plugins = [
    "babel-plugin-transform-import-meta",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@src": path.resolve(__dirname, "src"),
        },
      },
    ],
  ];

  api.cache(true);

  return {
    presets,
    plugins,
  };
};
