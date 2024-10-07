import globals from "globals"
import eslint  from "@eslint/js"
import tseslint from "typescript-eslint"
import tseslintPlugin from "@typescript-eslint/eslint-plugin"
import stylisticPlugin from '@stylistic/eslint-plugin-ts'

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
  },
  plugins: {
    "@typescript-eslint": tseslintPlugin,
    "@stylistic/ts": stylisticPlugin
  },
})