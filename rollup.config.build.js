import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import { uglify } from 'rollup-plugin-uglify'
import summary from 'rollup-plugin-summary'

const extensions = ['.js', '.ts']

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      sourcemap: true,
      name: 'Rankr'
    },
    plugins: [
      resolve({
        extensions,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
        babelHelpers: 'bundled',
      }),
      uglify(),
      visualizer({ template: 'treemap', filename: '.stats/treemap.html', sourcemap: true }),
      visualizer({ template: 'sunburst', filename: '.stats/sunburst.html', sourcemap: true }),
      summary(),
    ]
  }
]
