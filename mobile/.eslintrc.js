module.exports = {
  root: true,
  extends: ['expo', 'plugin:prettier/recommended'],
  ignorePatterns: ['/dist/*', '/node_modules/*', '.expo/*'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
