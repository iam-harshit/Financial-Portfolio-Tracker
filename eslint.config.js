import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
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
  },
];
