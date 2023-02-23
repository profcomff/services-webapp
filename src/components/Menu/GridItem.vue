<template>
    <a
        v-if="path.startsWith('http')"
        class="link"
        :href="path"
        target="_blank"
    >
        <img
            :src="item.icon.src"
            :alt="item.text"
        />
        <span>
            {{ item.text }}
        </span>
    </a>
    <RouterLink
        v-else
        class="link"
        :to="path"
    >
        <img
            :src="item.icon.src"
            :alt="item.text"
        />
        <span>
            {{ item.text }}
        </span>
    </RouterLink>
</template>

<script>
import { format_url } from '@/utils/urls';

export default {
    name: 'GridItem',
    props: {
        item: Object,
    },
    computed: {
        path() {
            return format_url(this.item.path);
        },
    },
};
</script>

<style scoped>
.link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: min(160px, 100%);
    padding: 4px 8px 12px;
}

.link img {
    padding: 12px;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border: 1px solid gray;
    border-radius: 25%;
    box-shadow: 1px 1px lightgray;
}

.link > span {
    font-size: 14px;
    text-align: center;
    color: black;
    line-height: 90%;
    font-weight: bold;
    overflow-wrap: anywhere;
}
</style>
