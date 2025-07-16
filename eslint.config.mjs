import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:tailwindcss/recommended',
  ),
  {
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Tailwind 관련 규칙 커스터마이징 (선택사항)
      'tailwindcss/classnames-order': 'off', // prettier-plugin-tailwindcss가 처리하므로 비활성화
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
