<template>
  <section class="section testimonial-section">
    <div class="container">
      <div class="testimonial-title">
        <h2>
          How our <br />clients <br />
          feel <br />
          about us
        </h2>
        <div class="testimonial-social">
          <h4>Follow us on</h4>
          <img
            src="../../assets/icons/ico_instagram.png"
            alt="BumbleD Instagram Image Link"
            id="nav2Style"
          />
        </div>
      </div>
      <div class="testimonial-container">
        <div class="testimonial-items">
          <span class="material-symbols-outlined"> chevron_left </span>
          <!-- <div class="testimonial-box"> -->
          <div class="testimonial">text here</div>
          <div class="testimonial-bubbles">bubbleshere</div>
          <!-- </div> -->

          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: var(--xl-m);
  align-items: center;
}

.testimonial-social {
  display: flex;
  justify-content: space-between;
  margin-top: var(--m-m);
  max-width: max-content;
  gap: var(--s-m);
  align-items: center;
}

.testimonial-social img {
  width: 36px;
  height: 36px;
}

.testimonial-container {
  height: 400px;
  background-color: aquamarine;
  flex: 1;
  border-radius: var(--border-radius);
}
.testimonial-items {
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  position: relative;
}

.testimonial-items > span {
  align-self: center;
}
.testimonial-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px 0;
  align-items: center;
  /* height: 200px; */
  position: relative;
}

.testimonial {
  align-self: center;
  justify-self: center;
}
.testimonial-bubbles {
  justify-self: end;
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translateX(-50%);
}

h2,
h4 {
  color: var(--primary-c);
}
</style>
