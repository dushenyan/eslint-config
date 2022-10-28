module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['dist'],
  extends: ['standard'],
  plugins: ['simple-import-sort'],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    // 回调使用箭头函数
    'prefer-arrow-callback': [2, { allowNamedFunctions: false }],
  }
}
