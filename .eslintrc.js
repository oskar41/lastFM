module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'prettier/prettier': 'off',
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-newline': 'error',

    'vue/html-closing-bracket-spacing': [
      'error',
      {
        selfClosingTag: 'never',
      },
    ],

    'vue/html-quotes': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['vue'],
}
