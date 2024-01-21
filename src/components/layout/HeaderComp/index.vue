<template>
    <header class="itisit-container header">
        <Logo />
        <NavLink />
        <ButtonComp class="auth-btn" variant="outlined" @click="globalState.authModalVisible = true">
            Login / Register
        </ButtonComp>
        <AuthModal />
    </header>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';
// Store
import { useGlobalState } from '@/store/globalState';
// Components
import Logo from './Logo.vue';
import NavLink from './NavLink.vue';
import ButtonComp from '@/components/common/ButtonComp.vue';
import AuthModal from '@/components/common/AuthModal.vue';

defineComponent({ name: 'Logo' });

const globalState = useGlobalState();
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.header {
    padding-top: 24px;
    padding-bottom: 24px;
    @include flex($alignItems: center, $gap: 16px);

    .auth-btn {
        margin-left: auto;
    }
}
</style>