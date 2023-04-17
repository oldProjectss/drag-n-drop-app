import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
        additionalData: `
          @import './src/styles/global.scss';
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
