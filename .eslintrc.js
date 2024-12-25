export default {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
  ],
  parserOption: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "security"],
  rules: {
    "prettier/prettier": ["error"],

    "no-unused-vars": ["error"],
    "no-undef": "error",
    "no-unreachable": "error",
    "no-empty": "error",

    eqeqeq: ["error", "always"],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],

    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",

    "security/detect-object-injection": "error",
    "security/detect-non-literal-fs-filename": "error",
    "security/detect-possible-timing-attacks": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-unsafe-regex": "error",
    "security/detect-unsafe-redirect": "error",
  },
};
