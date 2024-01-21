<template>
    <header class="itisit-container header">
        <Logo />
        <NavLink />
        <ButtonComp class="auth-btn" variant="outlined">Login / Register</ButtonComp>
    </header>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';
// Components
import Logo from './Logo.vue';
import NavLink from './NavLink.vue';
import ButtonComp from '@/components/common/ButtonComp.vue';

defineComponent({ name: 'Logo' });

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