<template>
  <nav class="main-nav">
    <router-link id="nav2Style" to="/">
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

/* .main-nav-buttons a {
  font-size: var(--p-size);
} */

/* .main-nav a {
  font-size: var(--p-size);
  font-family: Metropolis-ExtraLight;
  color: rgba(250, 250, 250, 0.77);
  text-decoration: none;
  position: relative;
  transition: 0.2s ease-out;
}
.main-nav a:hover {
  color: rgba(250, 250, 250, 1);
}

.main-nav a:not(#logo)::after {
  content: "";
  width: 0;
  height: 2px;
  background-color: var(--accent-c);
  transition: 0.2s ease-out;
  position: absolute;
  bottom: -3px;
  left: 0;
}
.main-nav a:hover:not(#logo)::after {
  content: "";
  width: 100%;
}

.main-nav a.router-link-exact-active {
  color: rgba(250, 250, 250, 1);
  font-family: Metropolis-SemiBold;
}

.main-nav a.router-link-exact-active:not(#logo)::after {
  content: "";
  width: 100%;
  background-color: var(--primary-c);
  position: absolute;
  height: 2px;
  bottom: -3px;
} */
</style>
