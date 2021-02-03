{
  "root": true,
      "env": {
      "browser": true,
      "es6": true,
              "node": true
  },
  "extends": [
      "eslint:recommended",
              "plugin:vue/essential"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
              "vue",
              "html"
  ],
  "rules": {
              //当tab是为了对齐允许混合使用空格和tab
              "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
          //指定程序中允许的最大环路复杂度
              "complexity": ["warn", 8],
              //排除接口调用失败res参数未使用的情况
              "no-unused-vars": ["error", { "argsIgnorePattern": "^res$" }],
              //要求 switch 语句中有 default 分支
              "default-case": 2,
              //要求使用 === 和 !==
              "eqeqeq": ["error", "always", {"null": "ignore"}],
              //禁用 alert、confirm 和 prompt
              "no-alert": 2,
              "no-console": 2,
              //禁止数字字面量中使用前导和末尾小数点
              "no-floating-decimal": 2,
      //禁止使用eval
              "no-eval": 2,
              //要求使用 JSDoc 注释
              "require-jsdoc": 1,
              //禁用嵌套的三元表达式
              "no-nested-ternary": 2,
              //强制可嵌套的块的最大深度
              "max-depth": ["error", 4],
              //禁止连续赋值
              "no-multi-assign": 2,
              //强制函数块最多允许的的语句数量
              "max-statements": ["warn", 50, { "ignoreTopLevelFunctions": true }],
              //禁止重复模块导入
              "no-duplicate-imports": 2,
              "no-debugger": 2,
              //强制所有控制语句使用一致的括号风格
              "curly": 2,
              //禁止出现空函数
              "no-empty-function": 2,
              //禁用不必要的嵌套块
              "no-lone-blocks": 2,
              //禁止对 String，Number 和 Boolean 使用 new 操作符
              "no-new-wrappers": 1,
              //禁止对 function 的参数进行重新赋值
              "no-param-reassign": 1,
              //禁止在return语句中使用赋值语句
              "no-return-assign": 1,
              //禁止自身比较
              "no-self-compare": 2,
              //禁用逗号操作符
              "no-sequences": 1,
              //禁用void 操作符
              "no-void": 1,
              //禁止变量声明与外层作用域的变量同名
              "no-shadow": 2,
              //禁止将 undefined作为标识符
              "no-undefined": 2,
              //禁止在变量定义之前使用它们
              "no-use-before-define": 2
  }
}