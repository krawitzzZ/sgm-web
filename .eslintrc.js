module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint/eslint-plugin', 'jest'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        'import/prefer-default-export': 'off',
        'newline-before-return': 'error',
        'newline-after-var': 'error',
        'padded-blocks': ['error', 'never'],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'index', 'unknown'],
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var', 'block', 'block-like'],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['const', 'let', 'var', 'block', 'block-like'],
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreMemberSort: true,
                ignoreDeclarationSort: true,
                allowSeparatedGroups: true,
                memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
            },
        ],
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'request.**.expect'] }],
    },
};
