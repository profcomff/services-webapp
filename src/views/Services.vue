<template>
    <section
        v-for="category in categories"
        :key="category.name"
        class="section"
    >
        <h2 class="noselect">{{ category.name }}</h2>
        <div
            class="grid"
            v-if="category.type === 'grid3'"
        >
            <GridItem
                v-for="item in category.items"
                :key="item.text"
                :item="item"
            />
        </div>
        <div
            class="list"
            v-else-if="category.type === 'list'"
        >
            <ListItem
                v-for="item in category.items"
                :key="item.text"
                :item="item"
            />
        </div>
    </section>
    <img
        :src="kitten"
        class="noselect kitty"
        @click="openDevtools"
    />
</template>

<script>
import * as singleSpa from 'single-spa';
import GridItem from '../components/Menu/GridItem.vue';
import ListItem from '../components/Menu/ListItem.vue';

export default {
    name: 'ServicesWebapp',
    components: {
        GridItem,
        ListItem,
    },
    props: {
        mobile: Boolean,
    },
    emits: ['route'],
    data() {
        return {
            categories: [],
            devtoolsCounter: 5,
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
    async beforeMount() {
        try {
            try {
                let res = await fetch(`${process.env.VUE_APP_API_NAVBAR}/apps`);
                this.categories = await res.json();
            } catch (err) {
                this.categories = JSON.parse(localStorage.getItem('navbar-categories'));
            }
        } catch (err) {
            console.log(err);
        } finally {
            localStorage.setItem('navbar-categories', JSON.stringify(this.categories));
        }
    },
    methods: {
        openDevtools() {
            this.devtoolsCounter--;
            if (this.devtoolsCounter > 0) return;
            this.devtoolsCounter = 5;
            singleSpa.navigateToUrl('/devtools');
        },
    },
};
</script>

<style scoped>
.grid {
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    row-gap: 32px;
    column-gap: 8px;
    width: min(100%, 600px);
}
.section {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
}
.section > h2 {
    margin-bottom: 8px;
    align-self: flex-start;
}
.section > div {
    padding: 0 8px;
}
.kitty {
    position: fixed;
    bottom: 56px;
    right: 10px;
    width: 3em;
}

@media screen and (min-width: 575px) {
    .kitty {
        bottom: 0;
    }
}
</style>
