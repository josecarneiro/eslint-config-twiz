module.exports = {
  extends: 'standard',
  env: {
    browser: false,
    es6: true,
    node: true
  },
  rules: {
    'object-curly-spacing': [ 2, 'always' ],
    'strict': [ 2, 'global' ],
    'quotes': [ 2, 'single', 'avoid-escape' ],
    'semi': [ 2, 'always' ],
    'space-before-function-paren': [ 1, 'never' ],
    'space-infix-ops': 2,
    'spaced-comment': 0,
    'arrow-spacing': 2,
    'no-console': 0,
    'no-var': 2,
    'no-undef': 1,
    'no-unused-vars': [ 1, { "vars": "all", "args": "after-used" } ],
    'padded-blocks': 0,
    'no-template-curly-in-string': 2,
    'arrow-parens': [ 1, 'as-needed' ],
    'eol-last': [ 1, 'always' ]
  }
};
