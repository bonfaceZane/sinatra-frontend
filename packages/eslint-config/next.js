const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        'eslint:recommended',
        'prettier',
        require.resolve('@vercel/style-guide/eslint/next'),
        'eslint-config-turbo',
    ],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
        browser: true,
    },
    plugins: ['only-warn'],
    settings: {
        'import/resolver': {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: [
        // Ignore dotfiles
        '.*.js',
        'node_modules/',
    ],
    overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
    rules: {
        // ternary
        'no-nested-ternary': 'warn',
        'no-unneeded-ternary': 'warn',

        // write small functions
        'max-depth': ['warn', 1],
        'max-lines-per-function': [
            'warn',
            { max: 50, skipBlankLines: true, skipComments: true },
        ],
        'max-nested-callbacks': ['warn', 1],
        'max-params': ['warn', 2],
    },
};
