import {defineConfig} from 'vite'
import {resolve} from 'path'

export default defineConfig({
    root: './test',
    server: {
        port: 9091,
        host: 'localhost',
        open: true
    },
    resolve: {
        alias: {
            // 指向构建后的产物，测试最终的构建结果
            'g-lang-tools': resolve(__dirname, 'dist/index.js')
        }
    },
    build: {
        outDir: '../dist-test',
        rollupOptions: {
            input: resolve(__dirname, 'test/index.html')
        }
    }
})
