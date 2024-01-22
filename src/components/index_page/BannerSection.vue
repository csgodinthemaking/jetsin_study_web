<template>
    <section class="itisit-container banner-section">
        <div class="left">
            <div class="letters">
                <span>Great</span>
                <span>English</span>
                <span>Lessons</span>
            </div>
            <p class="description">
                We are committed to providing high-quality <span>English</span> learning resources to allow learners to
                improve their
                <span>English</span> skills in a relaxed and enjoyable environment.
            </p>

            <div class="search">
                <InputComp placeholder="Search Your Courses" />
                <ButtonComp icon>
                    <Icon name="carbon:search" />
                </ButtonComp>
            </div>
        </div>

        <div class="right">
            <img class="banner" src="~/assets/image/banner.jpg" alt="online study">
        </div>
    </section>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';
// Components
import InputComp from '@/components/common/InputComp.vue';
import ButtonComp from '@/components/common/ButtonComp.vue';

defineComponent({ name: 'BannerSection' });
</script>

<style scope lang="scss">
@import '@/assets/style/mixins.scss';

.banner-section {
    padding-right: 0;
    @include flex($gap: 48px);

    .left {
        margin-top: 120px;
        margin-left: 10%;
        flex: 0 1 330px;
        @include flex($direction: column, $gap: 24px);

        .letters {
            @include flex($direction: column);

            span {
                font-size: 72px;
                font-weight: 500;
                line-height: 1.1;
                color: var(--c-heading);
            }
        }

        .description {
            font-style: italic;

            span {
                color: var(--c-primary);
            }
        }

        .search {
            height: 45px;
            @include flex;

            .input {
                height: inherit;
                border-right: none;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            .button {
                height: inherit;
                border-left: none;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }

    .right {
        flex: 1 1 50%;
        position: relative;

        .banner {
            width: 100%;
            height: auto;
            object-fit: cover;
            @include positioned($top: -100px, $right: 0);
        }

        /* Responsive */
        @media screen and (max-width: 992px) {
            display: none;
        }
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-right: 4%;

        .left {
            flex-basis: 100%;
            margin: 0 0 0 0;

            .letters span {
                font-size: 50px;
            }

            .search {
                width: 100%;
            }
        }

        .right {
            display: block;

            .banner {
                position: static;
            }
        }
    }

    @media screen and (max-width: 576px) {
        padding-right: 16px;
    }

    @media screen and (max-width: 345px) {
        padding-right: 12px;
    }
}
</style>