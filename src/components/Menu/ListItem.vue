<template>
    <a
        v-if="path.startsWith('http')"
        class="link"
        :href="path"
        target="_blank"
    >
        <MaterialIcon icon="info.icon" />
        {{ info.text }}
    </a>
    <RouterLink
        v-else
        class="link"
        :to="path"
    >
        <MaterialIcon icon="info.icon" />
        {{ info.text }}
    </RouterLink>
</template>

<script>
import { format_url } from '@/utils/urls';
import { MaterialIcon } from 'profcomff-common/components';

export default {
    name: 'ListItem',
    components: { MaterialIcon },
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    color: black;
    padding: 0.8em 20px;
    width: 100%;
    gap: 0.8em;
    background-color: #f2f2f2;
    border-radius: 5px;
}
</style>
