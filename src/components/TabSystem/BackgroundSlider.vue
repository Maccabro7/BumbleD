<template>
  <section class="hero-section" :class="mainServiceBG"></section>
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "../../Store/Store";

export default {
  setup() {
    const store = useStore();
    const { horizontalTabID } = storeToRefs(store);

    // const mainServiceBG =

    return { store, horizontalTabID };
  },
};
</script>

<style>
.hero-section {
  background-image: var(--vignette-main),
    url("../../assets/img/img_services_hero.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-width: var(--min-w-container);
  height: var(--max-h-section);
  min-height: var(--min-h-section);
  color: var(--text-c);
}
</style>
