import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';

const esbrowserslist = fs.readFileSync('./.browserslistrc')
  .toString()
  .split('\n')
  .filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
  input: 'src/entry.js',
  plugins: {
    preVue: [
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
        },
      }),
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ES_BUILD': JSON.stringify('false'),
    },
    vue: {
      css: true,
      template: {
        isProduction: true,
      },
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    },
  },
};

const external = [
  'vue',
];

const globals = {
  vue: 'Vue',
};

const buildFormats = [];
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      file: 'dist/vue-validation-input.esm.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      replace({
        ...baseConfig.plugins.replace,
        'process.env.ES_BUILD': JSON.stringify('true'),
      }),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: esbrowserslist,
            },
          ],
        ],
      }),
      commonjs(),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/vue-validation-input.ssr.js',
      format: 'cjs',
      name: 'VueValidationInput',
      exports: 'named',
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      babel(baseConfig.plugins.babel),
      commonjs(),
    ],
  };
  buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/vue-validation-input.min.js',
      format: 'iife',
      name: 'VueValidationInput',
      exports: 'named',
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      babel(baseConfig.plugins.babel),
      commonjs(),
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  };
  buildFormats.push(unpkgConfig);
}

export default buildFormats;