import type { DefineComponent } from 'vue'
import MyButton from './MyButton.vue'
import DragResizeGrid from './DragResizeGrid/index.vue'
import BPMNViewer from './BPMNViewer/index.vue'

export { MyButton, DragResizeGrid, BPMNViewer }

// 显式声明类型（可选，增强兼容性）
export type { DefineComponent as VueComponent }
