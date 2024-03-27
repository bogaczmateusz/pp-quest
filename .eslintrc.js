module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-var': 'error',
    'prefer-template': 'error',
    'comma-spacing': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'jsx-quotes': 'error',
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-unused-expressions': 'error',
    'no-useless-return': 'error',
    'comma-dangle': 0,
  },
};
