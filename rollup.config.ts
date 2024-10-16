import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import pkg from './package.json' assert { type: 'json' }
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

const config = {
	external: [
		...Object.keys(pkg.devDependencies),
		...Object.keys(pkg.peerDependencies)
	],
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
		typescript(),
		terser()
	]
}

export default config
