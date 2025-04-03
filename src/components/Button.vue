<template>
  <button :class="['btn', color]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{ color?: 'primary' | 'secondary' }>();
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.primary {
  background-color: blue;
  color: white;
}
.secondary {
  background-color: gray;
  color: white;
}
</style>