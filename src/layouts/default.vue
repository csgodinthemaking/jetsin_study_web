<template>
  <div class="default-layout">
    <slot></slot>
  </div>
</template>

<script setup />

<style scoped>
.default-layout {
  position: relative;
  background: var(--c-background);
}
</style>
