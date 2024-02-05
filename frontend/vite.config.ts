import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  base: '',
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    stylelint({
      fix: true,
    }),
  ],
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
