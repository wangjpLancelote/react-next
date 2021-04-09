/** @format */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        // require.resolve('@umijs/fabric/dist/eslint'),
        // 'prettier/@typescript-eslint',
        // 'plugin:prettier/recommended'
    ],
    globals: {
        __REDUX_DEVTOOLS_EXTENSION__: true,
    },
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
            ts: true,
            js: true,
        },
    },
}
