module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
    'testing-library',
    'react-hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/extensions': [1, 'never'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-expression'],
        unnamedComponents: ['arrow-function', 'function-expression'],
      },
    ],
    'import/no-absolute-path': [2, { commonjs: false, amd: false }],
  },
};
