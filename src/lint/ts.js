import ts from "typescript-eslint";

import js from "./js.js";

export default ts.config(...js, ...ts.configs.recommended, {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parserOptions: {
      project: "../../tsconfig.json",
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
});
