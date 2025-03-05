import vue from "./vue.js";

export default [
  ...vue,
  {
    ignores: ["dist/", "node_modules/", ".nuxt/", ".output/"],
  },
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["ky"],
              message: "Please, use @twiage/http package",
            },
          ],
        },
      ],
    },
  },
];
