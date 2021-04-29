const path = require("path");

module.exports = {
  resetMocks: false,
  rootDir: path.resolve(__dirname, "src"),
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.resolve(
      __dirname,
      "src/__mocks__/fileMock.js"
    ),
  },
  testEnvironment: "jest-environment-jsdom-sixteen",
  setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],
  coverageReporters: ["lcov"],
  coverageDirectory: path.resolve(__dirname, "coverage"),
  collectCoverageFrom: [
    "**/*.{js,ts,jsx.tsx}",
    "!**/node_modules/**",
    "!mocks/**/*",
    "!lib/**/*",
    "!routes.ts",
    "!index.tsx",
  ],
  resetModules: true,
  testTimeout: 10000,
};
