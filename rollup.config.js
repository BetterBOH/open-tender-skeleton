import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import collectSass from 'rollup-plugin-collect-sass';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies),
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonJS({
      include: 'node_modules/**'
    }),
    collectSass(),
    babel({
      babelrc: false,
      presets: [
        ['babel-preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      exclude: 'node_modules/**'
    })
  ]
};
