<template>
    <div
        v-if="!loaded"
        id="loading-wrapper"
    >
        <div class="lds-dual-ring" />
    </div>
    <iframe
        id="browser"
        :class="!loaded ? 'hidden' : ''"
        :src="url"
        frameborder="0"
        allow="camera"
        @load="on_load_complete"
    >
        <p>Ваш браузер не поддерживает IFrame</p>
    </iframe>
</template>

<script>
export default {
    name: 'ServicesBrowser',
    data: () => ({
        loaded: false,
    }),
    computed: {
        url() {
            let url = window.location.hash.replace('#', '');
            return url;
        },
    },
    beforeMount() {
        document.dispatchEvent(
            new CustomEvent('change-header-layout', {
                detail: {
                    layoutName: 'back',
                    text: 'Твой физфак!',
                },
            }),
        );
    },
    methods: {
        on_load_complete() {
            this.loaded = true;
        },
    },
};
</script>

<style scoped>
#browser {
    border: 0;
    width: 100%;
    height: calc(100vh - 56px * 2);
}

#loading-wrapper {
    padding: 10px;
    padding-top: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px * 2);
    width: auto;
}

.hidden {
    height: 0px;
    overflow: hidden;
    opacity: 0;
}
</style>
