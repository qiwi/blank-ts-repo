module.exports = {
    extends: [
        'eslint-config-qiwi',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off'
            }
        }
    ]
};
