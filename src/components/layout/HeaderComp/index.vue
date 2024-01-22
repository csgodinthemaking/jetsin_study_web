<template>
    <header class="itisit-container header" :class="{ 'header--bg': showBackgroud }">
        <Logo />
        <NavLink />
        <ButtonComp class="auth-btn" variant="outlined" @click="globalState.authModalVisible = true">
            Login / Register
        </ButtonComp>
        <ButtonComp icon variant="outlined" class="toggle-btn" @click="isMobileMenuOpened = !isMobileMenuOpened">
            <Icon v-if="!isMobileMenuOpened" name="ri-menu-fill" />
            <Icon v-else name="ooui:close" />
        </ButtonComp>
        <AuthModal />
        <MobileMenu :open="isMobileMenuOpened" />
    </header>
    <div class="header-helper"></div>
</template>

<script setup>
// Vue
import { defineComponent, ref } from 'vue';
// Store
import { useGlobalState } from '@/store/globalState';
// Hooks
import { useEventListener } from 'vue-hooks-plus';
// Components
import Logo from './Logo.vue';
import NavLink from './NavLink.vue';
import MobileMenu from './MobileMenu.vue';
import ButtonComp from '@/components/common/ButtonComp.vue';
import AuthModal from '@/components/common/AuthModal.vue';

defineComponent({ name: 'Logo' });

const globalState = useGlobalState();
const isMobileMenuOpened = ref(false);
const showBackgroud = ref(false);

const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    showBackgroud.value = scrollTop > 40;
}
useEventListener('scroll', handleScroll);
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.header {
    width: 100%;
    height: 104px;
    background-color: transparent;
    transition: background-color var(--transition);
    @include flex($alignItems: center, $gap: 16px);
    @include positioned($position: fixed, $top: 0, $left: 0, $zIndex: 40);

    &--bg {
        background-color: var(--c-background);
    }

    .auth-btn {
        margin-left: auto;
    }

    .toggle-btn {
        display: none;
        margin-left: auto;
        padding: 8px 12px;
    }

    /* Responsive */
    @media screen and (max-width: 800px) {
        height: 90px;

        &>.nav-link,
        &>.auth-btn {
            display: none;
        }

        .toggle-btn {
            display: flex;
        }
    }
}

.header-helper {
    height: 104px;

    /* Responsive */
    @media screen and (max-width: 800px) {
        height: 90px;
    }
}
</style>