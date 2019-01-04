import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import collectSass from 'rollup-plugin-collect-sass';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies),
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true
    }
  ],
  experimentalCodeSplitting: true,
  plugins: [
    resolve({
      customResolveOptions: {
        paths: './src/'
      }
    }),
    commonJS({
      include: 'node_modules/**'
    }),
    collectSass(),
    babel({
      babelrc: false,
      plugins: ['@babel/plugin-syntax-dynamic-import'],
      presets: [
        ['babel-preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      exclude: 'node_modules/**'
    })
  ]
};
