<template>
    <div>
        <h2>{{ info.name }}</h2>
        <div class="services">
            <ListItem
                v-for="b in info.items"
                :key="b.path"
                :info="b"
                @click.capture="$emit('navigate', b.path)"
            />
        </div>
    </div>
</template>

<script>
import ListItem from '@/components/Menu/ListItem.vue';

export default {
    name: 'ListView',
    components: {
        ListItem,
    },
    props: {
        info: Object,
    },
    emits: ['navigate'],
};
</script>

<style scoped>
.services {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-items: center;
    gap: 0.8em;
    padding: 10px;
}
</style>
