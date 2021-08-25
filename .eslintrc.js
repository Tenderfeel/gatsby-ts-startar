module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'graphql'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
        schemaJsonFilepath: path.resolve(
          __dirname,
          'src/__generated__/gatsby-introspection.json'
        ),
      },
    ],
  },
}
