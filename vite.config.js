// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         main: './src/main.jsx', // Specify the entry JavaScript file
//       },
//     },
//         // Specify additional assets to be copied to the dist directory
//         assetsDir: '.', // This will include all files in the root directory

//   },
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         main: './src/main.jsx', // Specify the entry JavaScript file
//       },
//     },
//     // Specify the HTML template file
//     base: './', // Set the base directory for the application
//     outDir: 'dist', // Specify the output directory
//     assetsDir: '.', // This will include all files in the root directory
//     assetsInlineLimit: 0, // Disable asset size limit (optional)
//     emptyOutDir: true, // Clear the output directory before building
//   },
// });

// import { defineConfig } from 'vite';

// export default defineConfig({
//   // Other configuration options...
//   build: {
//     // Other build options...
//     rollupOptions: {
//       input: {
//         main: './src/main.jsx',
//       },
//     },
//     // Specify the HTML template file
//     html: {
//       template: './index.html',
//     },
//   },
// });


// vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: './src/main.jsx',
//       },
//     },
//   },
//   // Specify additional assets to be copied to the dist directory
//   assetsInclude: ['index.html'],
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})