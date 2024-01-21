<template>
    <a-button class="button"
        :class="{ [`button--${props.variant}`]: true, 'button--icon': props.icon, 'button--block': props.block }">
        <slot></slot>
    </a-button>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';

defineComponent({ name: 'ButtonComp' });

const props = defineProps({
    variant: {
        // 'primary' | 'outlined'
        type: String,
        default: 'primary'
    },
    icon: {
        type: Boolean,
        default: false,
    },
    block: {
        type: Boolean,
        default: false,
    }
});

</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.button {
    height: auto;
    padding: 12px 18px;
    border: none;
    border-radius: var(--border-radius);
    background-color: var(--c-primary);
    color: #fff;
    cursor: pointer;
    transition: color var(--transition), background-color var(--transition);

    :deep(span) {
        font-weight: 500;
    }

    &:hover {
        color: #fff;
    }


    &--outlined {
        color: var(--c-text);
        border: 2px solid var(--c-border);
        background-color: transparent;

        &:hover {
            color: var(--c-primary);
            border-color: var(--c-primary);
        }

        &:active {
            background-color: transparent;
        }
    }

    &--icon {
        @include flexCenter;
    }

    &--block {
        width: 100%;
    }
}
</style>