<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-text-actions">
        <div class="hero-text">
          <h1>Introduce a new <br />lifestyle to your home</h1>
          <p>
            Transform the way you live with our innovative and stylish home
            solutions. We offer a range of products designed to enhance your
            space and bring comfort and convenience to your daily life. Say
            goodbye to cluttered and drab interiors and hello to a new, vibrant
            lifestyle that reflects your personal taste and individuality.
            Discover how you can elevate your home today and start living the
            life you deserve
          </p>
        </div>
        <div class="hero-actions">
          <router-link class="navButton" to="/portfolio">Portfolio</router-link>
          <router-link
            class="avoidStyle"
            :to="{ name: 'home', hash: '#aboutHash' }"
            >About us</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped>
.hero-section {
  background-image: url("../../assets/img/home_hero.webp");
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
  justify-content: center;
  /* align-items: center; */
}

.hero-text-actions {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: var(--m-m);
  padding-bottom: var(--xl-m);
}
.hero-actions {
  display: flex;
  gap: var(--m-m);
  align-items: center;
}
</style>
