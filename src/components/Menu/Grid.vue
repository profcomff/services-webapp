<template>
    <div>
        <h2>{{ info.name }}</h2>
        <div class="services">
            <GridItem
                v-for="b in info.items"
                :key="b.path"
                :info="b"
                @click.capture="$emit('navigate', b.path)"
            ></GridItem>
        </div>
    </div>
</template>

<script>
import GridItem from '@/components/Menu/GridItem.vue';

export default {
    name: 'GridView',
    components: {
        GridItem,
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
    flex-direction: row;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vmin;
    padding: 10px;
}
</style>
