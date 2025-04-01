<script setup lang="ts">
  import { defineProps } from "vue";

  defineProps<{ label: string }>();
</script>

<template>
  <button class="my-button">{{ label }}</button>
</template>

<style>
  .my-button {
    padding: 10px;
    background: blue;
    color: white;
    border: none;
    border-radius: 5px;
  }
</style>
