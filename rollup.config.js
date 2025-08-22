import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'

// 外部依赖，不会打包到最终产物中
const external = ['axios', 'crypto-js', 'dayjs', 'qs']

// 通用插件配置
const commonPlugins = [
    resolve({
        browser: true,
        preferBuiltins: false
    }),
    commonjs(),
    filesize()
]

export default [
    // ESM 构建 - 保持目录结构
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'es',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
            banner: '// g-lang-tools - A collection of common development tools'
        },
        external,
        plugins: [
            ...commonPlugins,
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationMap: true,
                outDir: 'dist'
            }),
            terser({
                format: {
                    comments: /^!/
                }
            })
        ],
        onwarn(warning, warn) {
            if (warning.code === 'EVAL') {
                return;
            }
            warn(warning);
        }
    }
]
