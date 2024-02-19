import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx', // Specify the entry JavaScript file
      },
    },
        // Specify additional assets to be copied to the dist directory
        assetsDir: '.', // This will include all files in the root directory
        index: './index.html',
  },
});

