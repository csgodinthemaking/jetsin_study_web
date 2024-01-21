<template>
    <nav class="nav-link">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path">
            {{ link.label }}
        </NuxtLink>
    </nav>
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';

defineComponent({ name: 'NavLink' });

const links = [{
    label: 'HOME',
    path: '/'
}, {
    label: 'COURSES',
    path: '/courses'
},
{
    label: 'BLOG',
    path: '/blog'
},
{
    label: 'CONTACT',
    path: '/contact'
}];
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.nav-link {
    @include flex($alignItems: center, $gap: 16px);

    a {
        padding: 8px;
        font-weight: 500;
        color: var(--c-heading);
        text-decoration: none;
        transition: color var(--transition);

        &:hover {
            color: var(--c-primary);
        }
    }

    .router-link-active {
        color: var(--c-primary);
    }
}
</style>