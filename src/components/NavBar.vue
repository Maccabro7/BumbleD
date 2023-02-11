<template>
  <nav class="main-nav">
    <router-link class="avoidStyle" to="/">
      <img src="../assets/logo_bbd.png" alt="BumbleD Logo" />
    </router-link>
    <div class="main-nav-buttons">
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact us</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  max-width: var(--max-w-container);
  min-width: var(--min-w-container);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
nav img {
  width: 102px;
}

.main-nav-buttons {
  display: flex;
  gap: var(--m-m);
}
</style>
