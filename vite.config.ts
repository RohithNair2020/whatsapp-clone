import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/': "http://localhost:8090",
    },
    port: 4000,
  },
  build: {
    outDir: "build",
  },
});
