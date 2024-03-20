import browserslistToEsbuild from 'browserslist-to-esbuild'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(() => {
	return {
		build: {
			outDir: 'build',
			target: browserslistToEsbuild()
		},
		plugins: [svgr(), react()],
		resolve: {
			alias: {
				'~': path.resolve(__dirname, 'src')
			}
		}
	}
})
