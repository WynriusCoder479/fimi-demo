module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@typescript-eslint', 'simple-import-sort', 'prettier'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-explicit-any': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'avoid',
				useTabs: true,
				tabWidth: 2,
				printWidth: 100,
				bracketSameLine: false,
				bracketSpacing: true,
				endOfLine: 'lf',
				semi: false,
				trailingComma: 'none',
				singleAttributePerLine: true,
				singleQuote: true,
				jsxSingleQuote: true,
				proseWrap: 'preserve',
				quoteProps: 'as-needed',
				plugins: ['prettier-plugin-tailwindcss']
			}
		]
	}
}
