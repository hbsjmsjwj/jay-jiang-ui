import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import less from 'rollup-plugin-less';


export default {
  input: 'src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    less({
      output:'./lib/bundle.css'
    }),
    uglify()
  ],
  external: ['react', '@emotion/core']
}
