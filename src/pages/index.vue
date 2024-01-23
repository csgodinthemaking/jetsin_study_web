<template>
  <main class="index-page">
    <BannerSection />
    <FeatureSection />
  </main>
</template>

<script setup lang="ts">
// Vue
import { defineComponent } from 'vue';
// Components
import BannerSection from '@/components/index_page/BannerSection.vue';
import FeatureSection from '@/components/index_page/FeatureSection/index.vue';

defineComponent({ name: 'IndexPage' });
</script>
