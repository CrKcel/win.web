import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const src = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [react()],
  esbuild: {
    include: /src\/.*\.js$/,
    exclude: [],
    loader: 'jsx',
  },
  resolve: {
    alias: {
      WinXP: `${src}/WinXP`,
      assets: `${src}/assets`,
      components: `${src}/components`,
      hooks: `${src}/hooks`,
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
});
