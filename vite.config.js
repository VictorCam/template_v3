import { defineConfig } from 'vite';
import { sync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  optimizeDeps: {
    include: sync('./src/**/**.html'),
  },
  root: 'src',
  build: {
    rollupOptions: {
      input: sync('./src/*.html'),
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  server: {
    port: 2020
  }
});
