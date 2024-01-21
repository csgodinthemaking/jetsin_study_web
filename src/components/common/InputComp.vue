<template>
    <a-input v-if="!props.password" :placeholder="props.placeholder" class="input" />
    <a-input-password v-else :placeholder="props.placeholder" class="input" />
</template>

<script setup>
// Vue
import { defineComponent } from 'vue';

defineComponent({ name: 'InputComp' });

const props = defineProps({
    password: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    }
});


console.log('props.password: ', props.password);
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

.input {
    padding: 10px 14px;
    color: var(--c-text);
}
</style>