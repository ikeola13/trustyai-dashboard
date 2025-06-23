module.exports = {
  // tells eslint to use the TypeScript parser
  parser: '@typescript-eslint/parser',
  // tell the TypeScript parser that we want to use JSX syntax
  parserOptions: {
    tsx: true,
    jsx: true,
    js: true,
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  // we want to use the recommended rules provided from the typescript plugin
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  globals: {
    window: 'readonly',
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    process: 'readonly',
    document: 'readonly',
    insights: 'readonly',
    shallow: 'readonly',
    render: 'readonly',
    mount: 'readonly',
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
    {
      files: ['cypress/**/*.ts', 'cypress/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './cypress/tsconfig.json',
        tsconfigRootDir: '.',
      },
      plugins: ['@typescript-eslint', 'import'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'import/no-relative-packages': 'error',
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
        'import/no-relative-parent-imports': 'off',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['../*', './*', '../../*', '../../../*'],
                message:
                  "Relative imports are not allowed. Use ~ alias instead (e.g., '~/pages/...' instead of '../pages/...').",
              },
            ],
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './cypress/tsconfig.json',
          },
        },
      },
    },
  ],
  settings: {
    react: {
      version: '^16.11.0',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
  // includes the typescript specific rules found here: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
  plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-react-hooks', 'import'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    'prettier/prettier': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
};
