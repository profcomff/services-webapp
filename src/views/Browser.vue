<template>
  <iframe id="browser" :src="url" frameborder="0" @load="on_load_complete">
    <p>Ваш браузер не поддерживает IFrame</p>
  </iframe>
</template>

<script>
export default {
  name: "services-browser",
  computed: {
    url() {
      let url = window.location.hash.replace("#", "");
      return url;
    },
  },
  methods: {
    on_load_complete() {
      let frame = document.getElementById("browser");
      frame.width = frame.contentWindow.document.body.scrollWidth;
      frame.height = frame.contentWindow.document.body.scrollHeight;
    },
  },
  beforeMount() {
    document.dispatchEvent(
      new CustomEvent("change-header-layout", {
        detail: {
          layoutName: "back",
          text: "Твой физфак!",
        },
      })
    );
  },
};
</script>

<style scoped>
#browser {
  border: 0;
  width: 100%;
  min-height: 90vh;
}
</style>
