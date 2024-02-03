import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    stylelint({
      fix: true,
    })
  ],
  esbuild: {
    jsxInject: 'import React from \'react\'',
  },
});
