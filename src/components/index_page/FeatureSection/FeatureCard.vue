<template>
    <div class="feature-card">
        <Icon :name="props.icon" />

        <div class="col">
            <h5 class="title">{{ props.title }}</h5>
            <p class="text">{{ props.text }}</p>
        </div>
    </div>
</template>

<script setup>
// Vue
import { defineComponent, defineProps } from 'vue';
// Components

defineComponent({ name: 'FeatureCard' });

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});
</script>

<style scope lang="scss">
@import '@/assets/style/mixins.scss';

.feature-card {
    padding: 20px;
    border-radius: var(--border-radius);
    background-color: var(--c-text-secondary);
    @include flex($gap: 16px);

    svg {
        flex: 0 0 40px;
        @include svgStyle($size: 40px, $color: var(--c-heading), $stroke: auto);
    }

    .col {
        @include flex($direction: column, $gap: 12px);

        .title {
            margin: 0;
            font-weight: 500;
            font-size: 24px;
            color: var(--c-heading);
            text-align: left;
            line-height: 1.1;
        }
    }

    /* Responsive */
    @media screen and (max-width: 576px) {
        svg {
            flex: 0 0 32px;
            @include svgStyle($size: 32px, $color: var(--c-heading), $stroke: auto);
        }

        .col .title {
            font-size: 20px;
        }
    }
}
</style>