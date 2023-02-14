<template>
  <section class="hero-section">
    <div class="container">
      <NavBar />
      <div class="hero-texts">
        <div class="hero-title">
          <h1>
            Construction <br />
            solutions
          </h1>
          <p>
            Our company specializes in finding solutions for every construction
            need. With a focus on extensions and big projects, we have the
            experience and expertise to bring your vision to life. From start to
            finish, we'll guide you through every step of the process to ensure
            a seamless and successful outcome. Trust us to bring your
            construction dreams to reality.
          </p>
        </div>
        <p>Use the Bar below to search through our main services</p>
      </div>
      <p>Tab system</p>
    </div>
  </section>
</template>

<script setup>
import NavBar from "../NavBar.vue";
</script>

<style scoped>
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
.container {
  padding: var(--s-m) 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}

.hero-texts {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: var(--m-m);
  padding-bottom: var(--xl-m);
}
</style>
