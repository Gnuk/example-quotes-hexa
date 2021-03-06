module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "src/**/*.{js,ts,vue}",
    "!src/**/*.component.ts",
    "!src/main.ts",
    "!**/*.d.ts",
  ],
  coverageReporters: ["html", "json", "text", "lcov", "clover"],
  collectCoverage: true,
};
