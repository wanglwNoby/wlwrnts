module.exports = {
    root: true,
    extends: ['@react-native-community', 'alloy', 'alloy/typescript'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'react-native/no-inline-styles': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error']
    }
};
