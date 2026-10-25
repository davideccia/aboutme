// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    typescript: true,
    formatters: { astro: true, css: true, markdown: true },
    ignores: [
      '.agents/**',
      'dist/**',
      '.astro/**',
      'pnpm-workspace.yaml',
      'package-lock.json',
    ],
  },
)
  .append({
    rules: {
      // js
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],
      'node/prefer-global/process': 'off',

      // style
      'curly': ['error', 'all'],
      'style/max-statements-per-line': [
        'error',
        { max: 2 },
      ],
      'style/brace-style': [
        'error',
        '1tbs',
        { allowSingleLine: true },
      ],
    },
  })
