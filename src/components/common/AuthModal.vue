<template>
    <a-modal :open="globalState.authModalVisible" title="Authorization" @cancel="globalState.authModalVisible = false"
        :footer="null" class="auth-modal">
        <InputComp placeholder="Username" />
        <InputComp password placeholder="Password" />
    </a-modal>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';
// Store
import { useGlobalState } from '@/store/globalState';
// Components
import InputComp from '@/components/common/InputComp.vue';

defineComponent({ name: 'AuthModal' });

const globalState = useGlobalState();
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.auth-modal {}
</style>