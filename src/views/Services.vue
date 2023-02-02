<template>
    <div
        v-if="!loaded"
        class="timetable"
    >
        <div class="lds-dual-ring"></div>
    </div>
    <div
        v-else
        class="container"
    >
        <div
            v-for="category in buttons"
            :key="category.name"
            class="category"
        >
            <GridView
                v-if="category.type == 'grid3'"
                :info="category"
                @navigate="route"
            />
            <ListView
                v-else-if="category.type == 'list'"
                :info="category"
                @navigate="route"
            />
        </div>
        <img :src="kitten" />
    </div>
</template>

<script>
import GridView from '@/components/Menu/Grid.vue';
import ListView from '@/components/Menu/List.vue';

export default {
    name: 'ServicesWebapp',
    components: {
        GridView,
        ListView,
    },
    props: {
        mobile: Boolean,
    },
    emits: ['route'],
    data() {
        return {
            buttons: [],
            loaded: false,
        };
    },
    computed: {
        kitten() {
            return `${process.env.VUE_APP_CDN}/app/menu_icons/kitty.svg`;
        },
    },
    mounted() {
        document.dispatchEvent(
            new CustomEvent('change-header-layout', {
                detail: {
                    layoutName: 'plain',
                    text: 'Твой физфак!',
                },
            }),
        );
    },
    updated() {
        document.dispatchEvent(
            new CustomEvent('change-header-layout', {
                detail: {
                    layoutName: 'plain',
                    text: 'Твой физфак!',
                },
            }),
        );
    },
    async beforeMount() {
        try {
            try {
                let res = await fetch(`${process.env.VUE_APP_API_NAVBAR}/apps`);
                this.buttons = await res.json();
            } catch (err) {
                this.buttons = JSON.parse(
                    localStorage.getItem('navbar-buttons'),
                );
            }
        } catch (err) {
            console.log(err);
        } finally {
            localStorage.setItem(
                'navbar-buttons',
                JSON.stringify(this.buttons),
            );
        }
        this.loaded = true;
    },
    methods: {
        route(to) {
            this.$emit('route', window.location.pathname, to);
        },
    },
};
</script>

<style scoped>
.container {
    padding: 10px;
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
}
.timetable {
    padding: 10px;
    padding-top: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    width: auto;
}
img {
    align-self: flex-end;
    width: 3em;
}
</style>
