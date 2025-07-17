import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
      },
    },
    ignores: ['node_modules/'],
  },
];

export default eslintConfig;
