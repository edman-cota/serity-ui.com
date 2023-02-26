/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'code-extra': '#2dd4bf',
        'code-function': '#60a5fa',
        'code-element': 'rgb(255,117,127)',
        'code-attribute': '#C099FF ',
        'code-attribute-value': '#2dd4bf',
        'code-bracket': '#B4C2F0',
        'code-parenthesis': 'rgb(180,194,240)',
        'code-delimiter': '#a855f7',
        'code-content': '#ffffff',
        'code-library': 'rgb(195,232,141)',
        'code-comment': '#9ca3af',
        'code-block': '#1E293B',

        'color-primary-800': 'rgba(0,0,0,0.8)',
      },
    },
    fontFamily: {
      'fira-code': ['Fira Code'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
