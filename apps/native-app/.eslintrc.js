module.exports = {
    parser: 'babel-eslint',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
    ],
    plugins: ['react', 'react-native'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      'react-native/react-native': true,
    },
    rules: {
      // Add any custom rules here
    },
  };
  