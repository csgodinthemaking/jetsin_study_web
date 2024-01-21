<template>
    <div class="mobile-menu" :class="{ 'mobile-menu--open': props.open }">

    </div>
</template>

<script setup>
// Vue
import { defineComponent, defineProps } from 'vue';

defineComponent({ name: 'MobileMenu' });

const props = defineProps({
    open: {
        type: Boolean,
        required: true
    }
});

</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.mobile-menu {
    width: 100%;
    height: calc(100dvh - 90px);
    background-color: var(--c-background);
    opacity: 0;
    transform: translateX(100%);
    transition: opacity var(--transition), transform var(--transition);
    @include positioned($position: fixed, $top: 90px, $left: 0);

    &--open {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>