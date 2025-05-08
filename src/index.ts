// src/index.ts
import type { DefineComponent } from 'vue';
import { MyButton } from './components';

export { MyButton };

// 显式声明类型（可选，增强兼容性）
export type { DefineComponent as VueComponent };