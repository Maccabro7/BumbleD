<template>
  <section class="sectionBox">
    <div class="container abscontainer">
      <NavBar />
      <MainServicesTab />
    </div>
    <transition-group
      name="SlideContent"
      tag="div"
      mode="out-in"
      :appear="true"
      class="SlideContent"
    >
      <div
        v-for="(content, index) in allServices"
        :key="content.title"
        class="fk"
        v-show="index === horizontalTabID"
      >
        <div class="slide-background"></div>
        <img :src="content.background" alt="" />
        <div class="slide-texts">
          <!-- <img :src="content.background" alt="" style="display: inline" /> -->
          <h1 style="color: black">
            {{ content.title }}
          </h1>
          <p style="color: black">
            {{ content.description }}
            {{ index }}
          </p>
        </div>
      </div>
    </transition-group>
  </section>

  <!-- v-if="index === horizontalTabID" -->

  <!-- mode="out-in" -->
</template>

<script>
import NavBar from "../NavBar.vue";
import MainServicesTab from "../TabSystem/MainServicesTab.vue";
import { useStore } from "../../Store/Store";
import { storeToRefs } from "pinia";
import mainServices from "../../Database/Data.json";
import { reactive, ref, computed } from "@vue/reactivity";

export default {
  components: { NavBar, MainServicesTab },
  setup() {
    const store = useStore();
    const { horizontalTabID } = storeToRefs(store);
    const allServices = mainServices.tabMainServicesSlides;

    const tabState = reactive({
      service: mainServices.tabMainServicesSlides,
      currentTabIndex: horizontalTabID.value,
    });

    const currentTabData = computed(() => {
      return tabState.service[horizontalTabID.value];
    });

    const Check = () => {
      console.log(mainServices.tabMainServicesSlides);
    };

    return { tabState, currentTabData, Check, allServices, horizontalTabID };
  },
};
</script>

<style scoped>
button {
  padding-top: 1000px;
}
.SlideContent {
  position: relative;
  overflow: hidden;
}
.slide-background > img {
  /* position: absolute; */
  /* overflow: hidden; */
  /* display: inline; */
}

.slide-texts {
  position: absolute;
  width: 1100px;
  /* margin: 0 auto; */
  top: 0;
  /* left: 50%;
  transform: translateX(-50%); */
  /* transform: translateY(-50%); */
}

.hero-background {
  /* position: relative; */
  /* min-width: max-content; */
  min-height: 1200px;
  background-size: cover;
  transition: all 1s ease;
}

.hero-background img {
  width: max-content;
  height: max-content;
}

.hero-background-none {
  min-height: 1200px;
}

.sectionBox {
  min-height: 1200px;
  position: relative;
  color: var(--text-c);
}

.abscontainer {
  height: var(--max-h-section);
  min-height: var(--min-h-section);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tab-container {
  display: flex;
  justify-content: center;
  height: 100%;
}

.hero-texts {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: var(--m-m);
}

/* .SlideContent-enter-active,
.SlideContent-leave-active {
  transition: all 1s;
}

.SlideContent-enter-to {
  transform: translateX(0);
  opacity: 100%;
}

.SlideContent-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.SlideContent-leave-from {
  transform: translateX(0);
  opacity: 100%;
}

.SlideContent-leave-to {
  transform: translateX(100%);
  opacity: 0;
} */

.SlideContent-enter-active,
.SlideContent-leave-active {
  transition: all 1s;
}

.SlideContent-leave-active {
  position: absolute;
  z-index: -1;
}

.SlideContent-enter-active {
  transition: all 1s;
  z-index: 0;
}

.SlideContent-enter-from {
  transform: translateX(-100%);
  /* opacity: 0; */
}

.SlideContent-enter-to {
  transform: translateX(0);
  /* opacity: 1; */
}

.SlideContent-leave-from {
  transform: translateX(0);
  /* opacity: 1; */
}

.SlideContent-leave-to {
  transform: translateX(100%);
  /* opacity: 0; */
}
</style>
