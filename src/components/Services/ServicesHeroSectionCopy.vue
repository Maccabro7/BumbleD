<template>
  <div class="main-services-tab-box">
    <MainServicesTab @changeMainIndex="changeSlide" />
  </div>
  <Carousel
    :transition="360"
    :wrapAround="true"
    ref="MainCarousel"
    class="carouselContainer"
  >
    <Slide v-for="(slide, index) in allServices" :key="index">
      <div
        class="carousel__item"
        :style="{
          background: slide.background,
        }"
        style="background-size: cover; background-repeat: no-repeat"
      >
        <div class="title-container">
          <div class="title-texts">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons> <Navigation /> </template>
  </Carousel>

  <div>
    <img :src="workingB" alt="" />
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import MainServicesTab from "../TabSystem/MainServicesTab.vue";
import { useStore } from "../../Store/Store";
import { storeToRefs } from "pinia";
// import mainServices from "../../Database/Data.json";
import { database } from "../../Database/Database";

import { onMounted, onUnmounted, ref, watch } from "vue";

export default {
  components: {
    MainServicesTab,
    Carousel,
    Slide,
    Navigation,
  },

  setup() {
    const store = useStore();
    const { horizontalTabID } = storeToRefs(store);
    const allServices = database.tabMainServicesSlides;

    const MainCarousel = ref(null);

    const changeSlide = (index) => {
      MainCarousel.value.slideTo(index);
    };

    const services = [
      {
        service: "Construction",
        title: "Construction Solutions",
        icon: "../src/assets/icons/ico_design.svg",
        background: import("/src/assets/img/main_construction_solution.webp"),
        description:
          "Our company specializes in finding solutions for every construction need. With a focus on extensions and big projects, we have the experience and expertise to bring your vision to life. From start to  finish, we'll guide you through every step of the process to ensure a seamless and successful outcome. Trust us to bring you construction dreams to reality",
      },
    ];

    const workingB = services[0].background;
    onMounted(() => {
      watch(MainCarousel.value.data.currentSlide, () => {
        store.setTabHorizontal(MainCarousel.value.data.currentSlide.value);
      });
    });

    onUnmounted(() => {
      store.setTabHorizontal(0);
    });

    return {
      horizontalTabID,
      allServices,
      changeSlide,
      MainCarousel,
      services,
      workingB,
    };
  },
};
</script>

<style scoped>
.carouselContainer {
  min-height: 800px;
}
.main-services-tab-box {
  position: absolute;
  z-index: 9;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
}

.carousel__item {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 800px;
}

.title-container {
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  margin: 0 auto;
}

.title-texts {
  color: var(--text-c);
  padding-bottom: var(--xl-m);
}

.title-texts > p {
  width: 70%;
}
</style>

<style>
.carouselContainer .carousel__prev,
.carouselContainer .carousel__next {
  padding: 12px;
  color: var(--text-c);
}

.carouselContainer .carousel__prev:hover,
.carouselContainer .carousel__next:hover {
  background-color: var(--text-low-c);
  color: var(--primary-c);
  border-radius: 3px;
}

.carouselContainer .carousel__icon {
  fill: currentColor;
  color: inherit;
  width: 64px;
}
</style>
