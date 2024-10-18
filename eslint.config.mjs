import globals from "globals"
import eslint  from "@eslint/js"
import tseslint from "typescript-eslint"
import tseslintPlugin from "@typescript-eslint/eslint-plugin"
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts'
import stylisticJsPlugin from '@stylistic/eslint-plugin-js'

export default tseslint.config({
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
    globals: globals.browser,
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ],
  rules: {
    "@typescript-eslint/no-extraneous-class": "off",
    "@stylistic/ts/indent": ["error", 2],
    "@stylistic/ts/quotes": ["error", "single"],
    "@stylistic/js/eol-last": ["error", "always"]
  },
  plugins: {
    "@typescript-eslint": tseslintPlugin,
    "@stylistic/ts": stylisticTsPlugin,
    "@stylistic/js": stylisticJsPlugin
  },
})