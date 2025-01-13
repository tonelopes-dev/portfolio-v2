// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    printWidth: 80,
    endOfLine: 'lf',
    overrides: [
        {
            files: '*.json',
            options: {
                parser: 'json',
            },
        },
    ],
}

export default config
