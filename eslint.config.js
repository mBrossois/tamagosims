import { tresLintConfig } from "@tresjs/eslint-config";

export default tresLintConfig(
  {},
  {
    rules: {
      "style/max-statements-per-line": "off",
      "style/quotes": ["error", "double", { avoidEscape: true }],
      "style/semi": ["error", "always"],
    },
  },
);
