import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'FileSaver.js',
  output: {
    file: 'FileSaverEsm.js',
    format: 'es'
  },
  plugins: [ commonjs() ]
};
