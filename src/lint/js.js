import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: eslintPluginPrettier,
      "unused-imports": unusedImports,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-void": "off",
    },
  },
];
