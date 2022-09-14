import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
export default defineConfig({
  build: {
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true,

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop();
          let extResult = '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType))
            extResult = 'img';
          else if (/css/i.test(extType)) extResult = 'css';
          else if (/eot|ttf|woff|woff2|/i.test(extType)) extResult = 'fonts';
          if (extResult) return `assets/${extResult}/[name]-[hash][extname]`;
          return `assets/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[hash].js',
        entryFileNames: 'assets/js/[hash].js',
      },
      manualChunks(id) {
        const chunks = [
          'element-plus',
          'vue-router',
          'vue',
          'pinia',
          'animate.css',
          'jalali-moment',
          'moment',
          'axios',
          'yup',
          'vee-validate',
          'tsparticles',
          'particles.vue3',
          'lodash',
          'qs',
          '@mdi/js',
        ];
        if (id.includes('/node_modules/')) {
          for (const chunkName of chunks) {
            if (id.includes(chunkName)) {
              return chunkName;
            }
          }
        }
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
