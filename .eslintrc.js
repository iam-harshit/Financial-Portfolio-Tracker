export default {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOption: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "security", "jsx-a11y"],
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

    "jsx-a11y/alt-text": [
      "error",
      { elements: ["img", "object", "area", "input[type='image']"] },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onKeyUp",
          "onKeyDown",
          "onKeyPress",
          "onFocus",
          "onBlur",
        ],
      },
    ],
    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "htmlFor",
        depth: 3,
      },
    ],
    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": ["error", { components: [""] }],
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/no-low-contrast": "warn",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/scope": "error",
  },
};
