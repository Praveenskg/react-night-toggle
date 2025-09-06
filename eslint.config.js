import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default defineConfig({
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
  },
  plugins: {
    react: reactPlugin,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
