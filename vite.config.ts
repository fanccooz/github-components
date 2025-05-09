import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.vue', 'src/**/*.ts'],
      outDir: 'dist',
      insertTypesEntry: true,
      staticImport: true,
      rollupTypes: true
    }),
    AutoImport({
      imports: [
        'vue',         // 自动导入 ref, reactive 等
        'vue-router',  // 自动导入 useRouter, useRoute 等
        'pinia'        // 自动导入 defineStore 等
      ],
      dts: 'src/auto-imports.d.ts', // 可选，生成自动导入的类型声明
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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