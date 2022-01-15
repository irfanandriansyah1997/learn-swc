module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': ['error']
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': ['off'],
    'import/order': ['off'],
    'import/prefer-default-export': ['off'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none'
      },
      {
        usePrettierrc: true
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          ['@/'],
          ['(?=.*.interface$)'],
          ['(?=.*.const$)'],
          ['(?=.*.spec$)'],
          [
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false
      }
    ],
    'sort-imports': ['off'],
    'sort-keys-fix/sort-keys-fix': ['error']
  }
};
