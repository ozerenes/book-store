module.exports = {
  extends: ['mantine'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/no-unknown-property': 'off',
    'no-param-reassign': 'off',
  },
  overrides: [
    {
      "files": ["tests/**/*"],
      "env": {
        "jest": true
      }
    }
  ]
};
