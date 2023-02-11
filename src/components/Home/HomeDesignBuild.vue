<template>
  <section class="section designbuild-section">
    <div class="container">
      <div class="designbuild-title-box">
        <div class="designbuild-title">
          <h2>Design & Build</h2>
          <p>
            We are a full-service construction company that specializes in both
            design and build services. Our team of experts, including
            architects, designers, and builders, have years of experience and
            bring a diverse range of skills to every project. With a streamlined
            process, we ensure seamless execution from start to finish and
            deliver high-quality results that meet your vision and expectations.
            We take the hassle out of construction and make the process
            effortless for our clients. All we need is your vision, and we'll
            take care of the rest.
          </p>
        </div>
        <div class="designbuild-action">
          <p>More details on our Services page</p>
          <router-link id="nav2Style" to="/services">View Services</router-link>
        </div>
      </div>
      <div class="designbuild-bubbles">
        <div class="designbuild-bubble">
          <div class="bubble-icon">
            <img
              src="../../assets/icons/ico_design.svg"
              alt="Design Icon"
              aria-hidden="true"
            />
          </div>
          <div class="bubble-text">
            <h3>Design</h3>
            <p>
              Design is a critical first step in any building project. Our team
              works closely with you to bring your vision to life through
              thorough discussions, sketches and plans. We focus on cost
              efficiency and ensuring that the end result aligns with your
              desired outcome.
            </p>
          </div>
        </div>
        <div class="designbuild-bubble">
          <div class="bubble-icon">
            <img
              src="../../assets/icons/ico_build.svg"
              alt="Build Icon"
              aria-hidden="true"
            />
          </div>
          <div class="bubble-text">
            <h3>Build</h3>
            <p>
              Our highly skilled construction team takes your vision and turns
              it into a reality. During the build phase, our team works
              diligently to ensure that all aspects of the project are carried
              out according to the plan. From laying the foundation to
              installing the finishing touches, we take pride in our attention
              to detail and commitment to quality.
            </p>
          </div>
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
  /* background-color: blueviolet; */
  display: flex;
  justify-content: space-between;
  gap: var(--xl-m);
}

.designbuild-title-box {
  min-width: 375px;
  max-width: 375px;
}

.designbuild-bubbles {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: var(--m-m);
}

.designbuild-bubble {
  max-width: 575px;
  display: flex;
  gap: var(--s-m);
}

.bubble-icon {
  background-color: var(--text-c);
  height: fit-content;
  border-radius: 50%;
}
.bubble-icon img {
  width: 64px;
  height: 64px;
  padding: 8px;
}
h2 {
  color: var(--accent-c);
}

h3 {
  color: var(--primary-c);
}
</style>
