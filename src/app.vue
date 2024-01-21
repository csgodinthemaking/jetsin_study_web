<template>
  <Html lang="en">

  <Head>
    <Meta charset="UTF-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta name="theme-color" content="#1677ff" />
    <meta name="color-scheme" content="light" />

    <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
    <Meta httpEquiv="x-ua-compatible" content="IE=7" />

    <Meta name="description" content="Jetsin Study" />
    <Meta name="keywords" content="Jetsin Study" />
    <Meta name="author" content="https://github.com/YernarT" />

    <Meta property="og:title" content="Jetsin Study" />
    <Meta property="og:description" content="Jetsin Study" />
    <Meta property="og:image" content="/favicon.jpg" />
    <Meta property="og:site_name" content="Jetsin Study" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="en_US" />

    <Link rel="icon" href="/favicon.png" type="image/png" />

    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet" />

    <Title>Jetsin Study</Title>
  </Head>

  <Body>
    <NuxtLayout>
      <a-config-provider :locale="enUS" :theme="ANTD_THEME">
        <NuxtPage />
      </a-config-provider>
    </NuxtLayout>
  </Body>

  </Html>
</template>

<script setup lang="ts">
// Vue
import { onBeforeMount } from "vue";
// Store
import { useUser } from "@/stores/user";
// Antd
import enUS from "ant-design-vue/locale/en_US";
import { ANTD_THEME } from '@/constants/antd';


// 初始化 Store
onBeforeMount(() => {
  const user = useUser();
  user.initUserFromLocal();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity var(--transition), filter var(--transition);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
}
</style>
