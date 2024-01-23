<template>
    <section class="itisit-container feature-section">
        <h3 class="title">Why To <span>Choose Us</span></h3>
        <p class="sub-title">Get the many courses you are looking for from us.</p>

        <ul class="feature-list">
            <FeatureCard v-for="(feature, index) in featureList" :key="index" v-bind="feature" />
        </ul>
    </section>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';
// Components
import FeatureCard from './FeatureCard.vue';

defineComponent({ name: 'FeatureSection' });

const featureList = [
    {
        icon: 'material-symbols:video-library-rounded',
        title: 'Wonderful self-produced videos',
        text: 'All learning videos are personally recorded by our team of senior English education experts to ensure that you get the most authentic, vivid and practical learning experience.'
    },
    {
        icon: 'fluent:people-team-16-filled',
        title: 'For learners of different levels',
        text: 'Whether you are a beginner, intermediate or advanced English learner, we have video courses suitable for your level, allowing you to calmly deal with various contexts and situations.'
    },
    {
        icon: 'icon-park-outline:topic',
        title: 'Topic-rich video content',
        text: 'We cover a variety of topics, including everyday English, business English, test preparation, and more, ensuring you find what you\'re interested in while studying.'
    },
    {
        icon: 'streamline:global-learning',
        title: 'Efficient learning experience',
        text: 'We pay attention to the individual needs of each learner and provide effective learning paths and methods to help you improve your English level faster.'
    },
    {
        icon: 'mdi:timetable',
        title: 'Flexible study timetable',
        text: 'You can access learning resources through our platform anytime and anywhere, easily integrating them into your daily life.'
    },
    {
        icon: 'fluent:content-view-gallery-lightning-16-filled',
        title: 'Continuously updated content',
        text: 'We are constantly updating and adding new learning resources to ensure that you always have access to the latest and most interesting English learning content.'
    },
];
</script>

<style scope lang="scss">
@import '@/assets/style/mixins.scss';

.feature-section {
    margin-top: 176px;

    .title {
        text-align: center;
        font-size: 48px;
        font-weight: 500;
        margin-bottom: 8px;

        span {
            font: inherit;
            color: var(--c-primary);
        }
    }

    .sub-title {
        text-align: center;
        font-style: italic;
        margin-bottom: 40px;
    }

    .feature-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    /* Responsive */
    @media screen and (max-width: 992px) {
        .feature-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 800px) {
        margin-top: 80px;
    }

    @media screen and (max-width: 576px) {
        margin-top: 40px;

        .title {
            font-size: 32px;
        }

        .feature-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>