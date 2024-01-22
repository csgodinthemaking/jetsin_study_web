<template>
  <main class="index-page">
    <BannerSection />
  </main>
</template>

<script setup lang="ts">
// Vue
import { defineComponent } from 'vue';
// Components
import BannerSection from '@/components/index_page/BannerSection.vue';

defineComponent({ name: 'IndexPage' });
</script>
