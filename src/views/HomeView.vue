<template>
  <main>
    <section class="section hero-section">
      <div class="container">
        <NavBar />
        <div class="hero-text">
          <h1>Home View</h1>
          <p>dsdasdsafasddas</p>
        </div>
        <p>TabSystem</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";

components: {
  NavBar;
}
</script>

<style scoped>
.hero-section {
  background-image: url("../assets/img/img_home_hero.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-width: var(--min-w-container);
}

.container {
  padding: 8px 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}

.container p {
  padding-bottom: 150px;
}
</style>
