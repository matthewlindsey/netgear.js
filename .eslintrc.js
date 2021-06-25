module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base/whitespace", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-underscore-dangle": "off",
  },
};
