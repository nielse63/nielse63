// http://eslint.org/docs/user-guide/configuring

const production = (process.env.NODE_ENV || 'development') !== 'development';
const errorOrOff = production ? 'error' : 'off';
const errorOrWarn = production ? 'error' : 'warn';

module.exports = {
  root:          true,
  parserOptions: {
    parser:      'babel-eslint',
    ecmaVersion: 2017,
    sourceType:  'module',
  },
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'unicorn',
  ],
  // add your custom rules here
  rules: {
    'import/prefer-default-export': 'off',

    // override unicorn rules
    'unicorn/explicit-length-check': 'off',

    // allow debugger during development
    'max-len':            'off',
    'key-spacing':        ['warn', { align: 'value' }],
    'no-console':         [errorOrOff, { allow: ['error', 'warn'] }],
    'func-names':         'error',
    complexity:           ['error', 5],
    'no-mixed-operators': [errorOrWarn],
    'no-debugger':        [errorOrWarn],
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      env:   {
        jest: true,
      },
    },
    {
      files: [
        'scripts/**',
      ],
      rules: {
        'no-console':                        'off',
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: true,
        }],
      },
    },
  ],
};
