<template>
  <div class="default-layout">
    <HeaderComp />
    <slot></slot>
  </div>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';
// Components
import HeaderComp from '@/components/layout/HeaderComp/index.vue';

defineComponent({ name: 'DefaultLayout' });
</script>

<style scoped>
.default-layout {
  position: relative;
  background: var(--c-background);
}
</style>
