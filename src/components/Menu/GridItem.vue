<template>
    <a
        v-if="path.startsWith('http')"
        class="link"
        :href="path"
        target="_blank"
    >
        <img
            :src="info.icon.src"
            alt="info.text"
        />
        {{ info.text }}
    </a>
    <RouterLink
        v-else
        class="link"
        :to="path"
    >
        <img
            :src="info.icon.src"
            alt="info.text"
        />
        {{ info.text }}
    </RouterLink>
</template>

<script>
import { format_url } from '@/utils/urls';

export default {
    name: 'GridItem',
    props: {
        info: Object,
    },
    computed: {
        path() {
            return format_url(this.info.path);
        },
    },
};
</script>

<style scoped>
.link {
    align-self: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 600;
    padding: 1vmin;
    color: black;
    width: 25vmin;
    height: max-content;
    gap: 2px;
}

.link img {
    border: 1px solid gray;
    border-radius: 25%;
    box-shadow: 1px 1px lightgray;
    padding: 2.5vmin;
    width: 20vmin;
}
</style>
