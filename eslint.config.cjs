const astro = require("eslint-plugin-astro");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  // ---------------------------------------------------------
  // Global ignores
  // ---------------------------------------------------------
  {
    ignores: [
      "**/.astro/**", // Ignore Astro build/cache files
      "**/node_modules/**",
      "**/dist/**",
    ],
  },
  // ---------------------------------------------------------
  // JS + TS
  // ---------------------------------------------------------
  {
    files: ["**/*.{js,ts}"],
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

  // ---------------------------------------------------------
  // Astro recommended config (flat)
  // Inject DIRECTLY — NO "extends"
  // ---------------------------------------------------------
  ...astro.configs["flat/recommended"],

  // ---------------------------------------------------------
  // Script blocks inside Astro files
  // ---------------------------------------------------------
  {
    files: ["**/.astro/.ts"],
    languageOptions: {
      parser: tsParser,
    },
  },

  // ---------------------------------------------------------
  // Prettier check for all Astro files
  // ---------------------------------------------------------
  {
    files: ["**/*.astro"],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
