# eslint-config
![NPM](https://img.shields.io/npm/l/@dushenyan/eslint-config) &nbsp;
![npm (scoped)](https://img.shields.io/npm/v/@dushenyan/eslint-config?color=%20) <br/>

Dushenyan ESLint config presets

-  Supports `vue`  `ts` `js`

# Install
```
pnpm add eslint -D
pnpm add @dushenyan/eslint-config -D
```

# Config eslintrc.js
```
{
  "extends":"@dushenyan"
}
```

# config setting.json
```
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

# Used Rules
The following configuration has been used and will be fixed automatically <br><br>

## Base Config 

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
| prefer-arrow-callback  | 回调使用箭头函数 |


<br/><br/>

## Typescript Config 

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
| semi                     |         禁止不必要的分号 |

<br/><br/>

## Vue Config 

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
|  no-setup-props-destructure  |   （off）setup可以解构    |
| multi-word-component-names          | （off）  组价名可以简短 |
|        html-indent           |  template 缩进两列 |










