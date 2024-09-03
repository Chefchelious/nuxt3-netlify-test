// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    quotes: ['warn', 'single'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
  },
});
