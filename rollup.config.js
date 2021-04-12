const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const gzipPlugin = require('rollup-plugin-gzip');

const pkg = require('./package.json');

export default {
  input: 'src/main.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    }, 
    {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    commonjs(),
    gzipPlugin(),
    typescript()
  ]
}