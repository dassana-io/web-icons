import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	{
		ignores: ['src/api/*', 'eslint.config.mjs', 'lib']
	},
	...fixupConfigRules(
		compat.extends(
			'plugin:react/recommended',
			'plugin:@typescript-eslint/recommended'
		)
	),
	{
		plugins: {
			react: fixupPluginRules(react)
		},

		languageOptions: {
			globals: {
				...globals.browser
			},

			ecmaVersion: 'latest',
			sourceType: 'module'
		},

		settings: {
			react: {
				version: 'detect'
			}
		},

		rules: {
			'@typescript-eslint/brace-style': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/consistent-type-assertions': 'off',
			'@typescript-eslint/indent': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/method-signature-style': 'off',
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'@typescript-eslint/no-dynamic-delete': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/prefer-optional-chain': 'off',
			'@typescript-eslint/promise-function-async': 'off',
			'@typescript-eslint/restrict-plus-operands': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/space-before-function-paren': 'off',
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/triple-slash-reference': 'off',
			'comma-dangle': ['warn', 'never'],

			'comma-spacing': [
				'warn',
				{
					after: true,
					before: false
				}
			],

			curly: ['error', 'multi-line', 'consistent'],

			'key-spacing': [
				'warn',
				{
					afterColon: true,
					beforeColon: false
				}
			],

			'multiline-ternary': 'off',
			'no-duplicate-imports': 'error',
			'no-tabs': 'off',
			'no-useless-computed-key': 'warn',
			'promise/param-names': 'off',
			'quote-props': ['warn', 'as-needed'],
			quotes: ['warn', 'single'],
			'react/display-name': 'off',
			'react/jsx-sort-props': 'warn',
			semi: ['warn', 'never'],

			'semi-spacing': [
				'warn',
				{
					after: true,
					before: false
				}
			],

			'sort-imports': [
				'warn',
				{
					ignoreCase: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
				}
			],

			'sort-keys': ['warn', 'asc'],
			'space-in-parens': ['warn', 'never']
		}
	},
	{
		files: ['**/.eslintrc.{js,cjs}'],

		languageOptions: {
			globals: {
				...globals.node
			},

			ecmaVersion: 5,
			sourceType: 'commonjs'
		}
	}
]
