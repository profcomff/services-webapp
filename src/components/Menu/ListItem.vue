<template>
    <a :href="info.path" target="_blank">
      <span class="material-symbols-sharp icon">{{ info.icon }}</span>
      {{ info.text }}
    </a>
</template>

<script>
import { format_url } from "@/utils/urls";

export default {
  name: "list-item",
  props: {
    info: Object,
  },
  computed: {
    path() {
      return format_url(this.info.path)
    }
  }
};
</script>

<style scoped>
a{
    align-self: flex-start;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    color: black;
    padding: 0.8em 20px;
    width: 100%;
    gap:0.8em;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

</style>
