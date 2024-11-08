import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.ts', // 入口文件
    output: [
        {
            name: 'CacheUtil',
            file: 'dist/index.umd.js',
            format: 'umd',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        }
    ],
    plugins: [
        resolve(), // 告诉 Rollup 如何找到外部模块
        commonjs(), // 将 CommonJS 转换为 ES2015 模块供 Rollup 处理
        /**
         * 
         tsconfig配置类型定义文件在dist/types下，rollup配置文件输出到dist下，
         这种情况打包会报错。
         */
        typescript(), // 使用 TypeScript 插件
        terser() // 压缩输出
    ]
};