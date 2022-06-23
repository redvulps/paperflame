module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/*.config.js", ".eslintrc.js", ".prettierrc.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint",
  ],
  rules: {
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "react/function-component-definition": "off",
    "no-restricted-exports": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
  },
};
