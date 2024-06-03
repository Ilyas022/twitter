import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			constants: path.resolve(__dirname, './src/constants'),
			hooks: path.resolve(__dirname, './src/hooks'),
			utils: path.resolve(__dirname, './src/utils'),
			store: path.resolve(__dirname, './src/store'),
			styles: path.resolve(__dirname, './src/styles'),
			pages: path.resolve(__dirname, './src/pages'),
			types: path.resolve(__dirname, './src/types'),
		},
	},
})
