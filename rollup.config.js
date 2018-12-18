import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
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
