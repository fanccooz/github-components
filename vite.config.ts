// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true }), // 生成 .d.ts 文件
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'GitHubComponents',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // 排除 Vue 打包
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: 'index.css'
      },
    },
  },
});