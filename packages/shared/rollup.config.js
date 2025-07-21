import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      exclude: ['**/*.test.*'],
    }),
    terser(),
  ],
}