module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'linebreak-style': [2, 'unix'],
		quotes: [2, 'single', 'avoid-escape'],
		'no-console': 2,
		'@typescript-eslint/no-unused-vars': [
			1,
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: false,
			},
		],
		'@typescript-eslint/explicit-function-return-type': 2,
		'no-empty': 2,
		'@typescript-eslint/no-explicit-any': 2,
		'@typescript-eslint/no-inferrable-types': 0,
		'max-len': [
			2,
			{
				code: 100,
				ignorePattern: '^import\\W.*',
				tabWidth: 2,
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/no-unescaped-entities': 0,
		'react/display-name': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/ban-ts-ignore': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
