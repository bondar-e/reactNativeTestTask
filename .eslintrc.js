module.exports = {
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'error',
    'comma-dangle': 'off',
    camelcase: 'off',
    'no-console': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
