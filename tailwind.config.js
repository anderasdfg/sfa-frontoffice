/** @type {import('tailwindcss').Config} */

const zIndex = Object.fromEntries(
  [
    'switch',
    'nav',
    'sidebar',
    'ripple',
    'dropdown',
    'datepicker',
    'selectOptions',
    'tooltip',
    'drawer',
    'backdrop',
    'cardmodal',
    'snackbar',
  ].map((component, index) => [component, (index + 1) * 10]),
);

module.exports = {
  content: ['./index.html', './src/**/*.{ts,vue,story.vue}'],
  theme: {
    zIndex,
    extend: {
      height: {
        screen: 'calc(var(--vh) * 100)',
      },
      minHeight: {
        screen: 'calc(var(--vh) * 100)',
      },
    },
  },
  plugins: [],
};
