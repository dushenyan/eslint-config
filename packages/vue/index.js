module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' },
      rules: { indent: 0 }
    }
  ],
  extends: ['plugin:vue/vue3-recommended', '@dushenyan/eslint-config-ts'],
  rules: {
    // setup可以解构
    'vue/no-setup-props-destructure': 'off',
    // 组价名不能简短
    'vue/multi-word-component-names': 'off',
    // template 缩进两列
    'vue/html-indent': ['error', 2],
  }
}
