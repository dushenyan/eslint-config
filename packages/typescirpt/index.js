module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@dushenyan/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止不必要的分号
    '@typescript-eslint/semi': [2, 'never'],
  }
}
