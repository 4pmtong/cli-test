/**
 * @desc: eslint代码校验配置，大部分使用airbnb的校验规则
 * @author: wenkang_lin
 * @ref: https://github.com/airbnb/javascript
 */

module.exports = {
  
  root: true,
  
  parser: 'babel-eslint',
  
  parserOptions: {
    sourceType: 'module'
  },
  
  extends: 'airbnb-base',
  
  env: {
    es6: true
  },
  
  rules: {
    'import/extensions': ['error', 'always', { js: 'never' }],
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-dynamic-require': 'off',
    'no-new': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': 'off',
    'no-shadow': ['error', { allow: ['resolve', 'reject', 'state'] }],
    'func-names': ['error', 'never'],
    'global-require': 'off',
    radix: ['error', 'as-needed'],
    'quote-props': ['error', 'as-needed', { keywords: true }],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'no-underscore-dangle': 'off',
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      MemberExpression: 0,
      FunctionDeclaration: { parameters: 'first' },
      FunctionExpression: { parameters: 'first' }
    }],
    'no-cond-assign': ['error', 'except-parens'],
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'prefer-promise-reject-errors': 'off',
    'padded-blocks': 'off'
  }
  
};