module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "no-console": "warn",
    "react/button-has-type": "warn",
    "import/extensions": "warn",
    "import/no-duplicates": "warn",
    "react/function-component-definition": "off",
    "arrow-body-style": ["warn", "as-needed"],
    "prettier/prettier": "off"
  },
};
