<template>
  <section class="section testimonial-section">
    <div class="container">
      <div class="testimonial-title">
        <h2>How our clients feel about us</h2>
        <div class="testimonial-social">
          <h4>Follow us on</h4>
          <a
            href="https://www.instagram.com/bumbled.ltd/"
            class="avoidStyle linkInstagram"
          >
            <img
              src="../../assets/icons/ico_instagram.png"
              alt="BumbleD Instagram Image Link"
            />
          </a>
        </div>
      </div>
      <div class="testimonial-container">
        <Carousel
          :transition="360"
          :wrapAround="true"
          ref="TestimonialCarousel"
          class="testimonial-box"
        >
          <Slide
            v-for="(testimonial, index) in testimonialsData"
            :key="index + 1"
            v-show="index + 1"
            class="testimonial-slide"
          >
            <div class="testimonial-slide-container">
              <p class="testimonial-text">{{ testimonial.Text }}</p>
              <p class="testimonial-name">{{ testimonial.Name }}</p>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import database from "../../Database/Data.json";
export default {
  components: { Carousel, Navigation, Pagination, Slide },
  setup() {
    const testimonialsData = database.Testimonials;
    console.log(testimonialsData);

    return { testimonialsData };
  },
};
</script>

<style scoped>
.testimonial-section {
  background-color: var(--text-c);
}
.container {
  max-width: var(--max-w-container);
  min-width: var(--min-w-container);
  gap: var(--l-m);
  align-items: center;
  display: flex;
  /* grid-template-columns: 300px minmax(256px, 1024px); */
  /* grid-template-columns: repeat(auto-fit, minmax(256px, 780px)); */
  justify-content: space-between;
}

.testimonial-social {
  display: flex;
  flex-direction: row;
  margin-top: var(--m-m);
  gap: var(--s-m);
  align-items: center;
}

.testimonial-social img {
  width: 36px;
  height: 36px;
}

.testimonial-container {
  height: 400px;

  background-color: var(--primary-low-c);

  border-radius: var(--border-radius);
}

.testimonial-slide-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--m-m);
}
.testimonial-text {
  /* font-size: var(--p-btn-size); */
  font-size: 1.2rem;
  color: var(--primary-c);
  font-family: Metropolis-SemiBold;
  line-height: 1.35;
  text-align: start;
}

.testimonial-name {
  font-size: var(--p-size);
  color: var(--dark-grey-c);
}

.testimonial-box {
  height: 100%;
}

h2,
h4 {
  color: var(--primary-c);
}
</style>

<style>
.testimonial-section .testimonial-slide {
  height: 400px;
  width: 100px;
}

.testimonial-section .testimonial-box {
  height: 100%;
  width: 750px;
}

.testimonial-section .carousel__pagination-button::after {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary-low-c);
}

.testimonial-section .carousel__pagination-button:hover::after {
  background-color: var(--accent-c);
}

.testimonial-section .carousel__pagination-button--active::after {
  background-color: var(--primary-c);
}

.testimonial-section .carousel__prev,
.testimonial-section .carousel__next {
  padding: 12px;
  color: var(--primary-c);
}

.testimonial-section .carousel__prev:hover,
.testimonial-section .carousel__next:hover {
  background-color: var(--text-low-c);
  color: var(--primary-c);
  border-radius: 3px;
}

.testimonial-section .carousel__icon {
  fill: currentColor;
  color: inherit;
  width: 64px;
}
</style>
