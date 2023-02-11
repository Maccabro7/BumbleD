<template>
  <nav class="footer-section">
    <div class="container">
      <router-link to="/">
        <img src="../assets/logo_bbd.png" alt="BumbleD Logo" />
      </router-link>
      <div class="main-nav-buttons">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Contact us</router-link>
        <a href="https://www.instagram.com/bumbled.ltd/">
          <img
            src="../assets/icons/ico_instagram_white.png"
            alt="Link to BumbleD Instagram"
            id="nav2Style"
          />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-section {
  background-color: var(--primary-c);
  padding: var(--m-m) 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--m-m);
}

.container img {
  width: 212px;
  height: 93px;
}
.main-nav-buttons {
  display: flex;
  align-items: center;
}
.main-nav-buttons img {
  width: 36px;
  height: 36px;
}
</style>
