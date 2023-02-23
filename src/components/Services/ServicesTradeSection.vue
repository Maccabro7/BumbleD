<template>
  <section class="section trade-section">
    <div class="container">
      <div class="trade-text">
        <h2>Trade Services</h2>
        <p>
          Trade services refer to the specialized and skilled work performed in
          construction projects that involve the installation, maintenance, and
          repair of specific building systems and components. These services
          play a crucial role in ensuring that a building is functional, safe,
          and aesthetically pleasing. Each trade service requires a different
          set of skills and expertise, and our team of professionals are trained
          and experienced in each of these areas. By masterfully executing these
          services, we can deliver a building that is not only beautiful, but
          also functional and safe for years to come.
        </p>
      </div>
      <div class="trade-tab-box">
        <div class="tradeSlide--menu">
          <TradeServicesTab @changeTradeIndex="changeSlide" />
        </div>
        <div class="tradeCarousel--box">
          <Carousel :wrapAround="true" ref="TradeCarousel" :transition="360">
            <Slide v-for="(service, index) in tradeServices" :key="index">
              <div
                class="carousel__item--box"
                :style="{ background: service.background }"
                style="background-size: cover; background-repeat: no-repeat"
              >
                <div class="carousel__item--slide--box">
                  <div class="tradeSlide--texts">
                    <div class="tradeSlide--description">
                      <div class="separator-height s-primary-shorter"></div>
                      <p>{{ service.description }}</p>
                    </div>
                    <div class="tradeSlide--features--box">
                      <div
                        class="tradeSlide--feature"
                        v-for="(feature, index) in service.features"
                        :key="index"
                      >
                        <div class="feature-bubble"></div>
                        <div class="feature-text">
                          <h4>{{ feature }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ServicesData from "../../Database/Data.json";
import TradeServicesTab from "../TradeServicesTab.vue";
import { useStore } from "../../Store/Store";
import { storeToRefs } from "pinia";
import { onUnmounted } from "@vue/runtime-core";

export default {
  components: { Carousel, Slide, Pagination, Navigation, TradeServicesTab },
  setup() {
    const store = useStore();
    const { tradeServiceIndex } = storeToRefs(store);

    const tradeServices = ServicesData.TradeServices;
    const TradeCarousel = ref(null);
    const changeSlide = (index) => {
      TradeCarousel.value.slideTo(index);
    };

    onUnmounted(() => {
      store.setTradeServiceIndex(0);
    });

    return { tradeServices, TradeCarousel, changeSlide, tradeServiceIndex };
  },
};
</script>

<style scoped>
.trade-section {
  background-color: var(--text-c);
}
.trade-text {
  width: 60%;
  margin-bottom: var(--s-m);
}

.trade-tab-box {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.tradeSlide--menu {
  position: absolute;
  height: 638px;
  top: 48.5%;
  transform: translateY(-50%);
  left: 0;
  z-index: 7;
  margin-left: var(--m-m);
}

.carousel__item--box {
  max-height: 638px;
  min-height: 512px;
  height: 100vh;
  display: flex;
}

.carousel__item--slide--box {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.tradeSlide--texts {
  width: 66%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: var(--xl-m);
}

.tradeSlide--description {
  font-size: var(--p-size);
  color: var(--text-c);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  gap: var(--s-m);
  width: 100%;
  height: max-content;
}

.s-primary-shorter {
  background-color: var(--text-c);
  height: 70%;
}

.tradeSlide--features {
  align-self: flex-start;
  display: flex;
  gap: 64px;
}

.tradeSlide--features--box {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  padding-left: 8px;
  gap: var(--s-m);
}

.tradeSlide--feature {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  gap: var(--s-m);
  justify-content: center;
  align-items: center;
  text-align: left;
}

.tradeSlide--feature h4 {
  color: var(--text-c);
  align-self: flex-start;
}

.feature-bubble {
  padding: 4px;
  background-color: var(--text-c);
  border-radius: 50%;
}
</style>

<style></style>
