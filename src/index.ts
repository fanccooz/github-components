// src/index.ts
import type { DefineComponent } from 'vue';

// 显式声明类型（可选，增强兼容性）
export type { DefineComponent as VueComponent };

export * from './components';