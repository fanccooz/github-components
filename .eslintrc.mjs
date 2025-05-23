import autoImportGlobals from './.eslintrc-auto-import.json' assert { type: 'json' }

export default {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue'],
  rules: {
    // 你可以在这里添加自己的规则
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    ...(autoImportGlobals.globals || {})
  }
}
