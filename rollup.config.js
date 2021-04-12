import babel from '@rollup/plugin-babel';
import gzipPlugin from 'rollup-plugin-gzip';

const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      compact: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      compact: true,
    },
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    nodeResolve(),
    commonjs(),
    gzipPlugin(),
    typescript(),
  ],
};
