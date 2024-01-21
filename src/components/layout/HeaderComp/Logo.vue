<template>
    <div class="logo">
        <img src="/favicon.png" alt="Jetsin study">
        <div class="col">
            <span>Jestin</span>
            <span>Edu</span>
        </div>
    </div>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';

defineComponent({ name: 'Logo' });

</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.logo {
    cursor: pointer;
    @include flex($alignItems: center, $gap: 8px);

    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }

    .col {
        @include flex($direction: column, $alignItems: center, $gap: 1px);

        span {
            font-weight: 500;
            line-height: 1;

            &:first-child {
                color: var(--c-primary);
            }
        }
    }
}
</style>