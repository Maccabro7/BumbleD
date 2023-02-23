<template>
  <section class="section contactsection">
    <div class="container">
      <div class="contact-box">
        <div class="contact-text-box">
          <div class="contact-text">
            <h2>Lets have a chat!</h2>
            <p>
              Our goal is to hear and understand your vision. Simply share your
              ideas with us and let us take care of the rest. We will carefully
              plan out the action steps and timeline for the project before we
              begin, ensuring that everything runs smoothly from start to
              finish. With us handling the design and planning, you can sit back
              and relax. All you have to do is reach out to us and share your
              vision, we'll handle the rest!
            </p>
          </div>
          <div class="contact-text">
            <h3>Contact us for any question!</h3>
            <p>
              Happy to answer any of your questions regarding our services and
              how could we help you!
            </p>
          </div>
          <div class="contact-text">
            <h3>Free estimates</h3>
            <p>Our estimates and surveys are free of charge.</p>
          </div>
          <div class="contact-text">
            <h3>You contact us!</h3>
            <p>01296329799</p>
            <p>01296329799</p>
            <p>01296329799</p>
          </div>
        </div>
        <div class="contact-form-box">
          <form action="submit" @submit.prevent="submitForm">
            <BaseInput />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseInput from "./BaseInput.vue";

export default {
  components: { BaseInput },
  setup() {
    const submitForm = () => {};

    return { submitForm };
  },
};
</script>

<style>
.contactsection {
  background-image: url(../../assets/img/contact_hero.webp);
  background-size: cover;
  background-repeat: no-repeat;
  max-height: var(--max-h-section);
  min-height: var(--min-h-section);
}

.contact-box {
  background-color: var(--primary-low-o-c);
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--text-c);
  gap: var(--xl-m);
}

.contact-box h2,
.contact-box h3 {
  color: var(--text-c);
}
.contact-text-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-form-box {
  height: 100%;
  width: 50%;
  background-color: var(--text-c);
}
</style>
