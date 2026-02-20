import typescriptParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: ['.astro/**/*', 'dist/**/*', 'node_modules/**/*'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
