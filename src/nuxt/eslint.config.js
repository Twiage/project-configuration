import nuxt from "../lint/nuxt.js";

/**
 * @param {import("eslint").Linter.Config[]} config
 * @returns {import("eslint").Linter.Config[]}
 */
export default function defineESLintConfig(config = []) {
  return [...nuxt, ...config];
}
