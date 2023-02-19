<template>
    <a
        v-if="path.startsWith('http')"
        class="link"
        :href="path"
        target="_blank"
    >
        <img
            :src="item.icon.src"
            alt="item.text"
            width="64"
            height="64"
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
            alt="item.text"
            width="64"
            height="64"
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
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    gap: 2px;
    width: 100px;
    border: 1px solid gray;
    border-radius: 24px;
    box-shadow: 1px 1px lightgray;
    width: 112px;
    height: 112px;
    padding: 4px 8px 12px;
}

.link > span {
    text-align: center;
    color: black;
    line-height: 90%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-wrap: anywhere;
}
</style>
