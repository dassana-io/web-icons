import browserslistToEsbuild from 'browserslist-to-esbuild'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
	return {
		build: {
			outDir: 'build',
			target: browserslistToEsbuild()
		},
		plugins: [react()],
		resolve: {
			alias: {
				'~': path.resolve(__dirname, 'src')
			}
		}
	}
})
