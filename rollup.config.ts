import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const config = {
	external: ['react', 'react-dom'],
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs'
		},
		{
			file: pkg.module,
			format: 'es'
		}
	],
	plugins: [
		resolve({ browser: true }),
		commonjs(),
		image(),
		typescript({
			useTsconfigDeclarationDir: true
		}),
		terser()
	]
}

export default config
