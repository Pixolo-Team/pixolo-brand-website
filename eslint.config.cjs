const astro = require("eslint-plugin-astro");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  // JS + TS
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },

  // Astro integration
  {
    files: ["**/*.astro"],
    processor: astro.processors[".astro"],
  },

  // Script tags inside .astro files
  {
    files: ["*.astro/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
  },
];
