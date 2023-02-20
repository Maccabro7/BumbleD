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
      <div class="trade-tab-box"></div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: { Carousel, Navigation, Pagination, Slide },
  setup() {},
};
</script>

<style>
.trade-text {
  width: 60%;
  margin-bottom: var(--s-m);
}

.trade-tab-box {
  background-image: url("../../assets/img/img_home_hero.webp");
  background-size: cover;
  max-height: 537px;
  min-height: 437px;
}
</style>
