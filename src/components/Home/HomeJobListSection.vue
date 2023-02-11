<template>
  <section class="section joblist-section">
    <div class="container">
      <div class="joblist-title">
        <h2>
          Solutions for <br />
          your<br />
          construction<br />
          needs
        </h2>
        <router-link class="navButton" to="/services"
          >View all Services</router-link
        >
      </div>
      <div class="joblist-list-box">
        <div class="joblist-specialise-box">
          <h3>We Specialise in</h3>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_full_refurbishment.svg"
                alt="Icon for Full Refurbishment"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Full Refurbishments</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_extension.svg"
                alt="Icon for Conversions & Extensions"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Conversions & Extensions</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_newbuild.svg"
                alt="Icon for New Builds"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">New Builds</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_kitchen.svg"
                alt="Icon for Kitchens"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Kitchens</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_bathroom.svg"
                alt="Icon for Bathrooms"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Bathrooms</p>
          </div>
        </div>
        <div class="joblist-experts-box">
          <h3>Experts at</h3>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_plumbing.svg"
                alt="Icon for Plumbing & Electric"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Plumbing & Electric</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_flooring.svg"
                alt="Icon for Flooring & Tiling"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Flooring & Tiling</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_repointing.svg"
                alt="Icon for Repointing & Rendering"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Repointing & Rendering</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_joinery.svg"
                alt="Icon for Bespoke Joinery & Carpentry"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Bespoke Joinery & Carpentry</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_painting.svg"
                alt="Icon for Painting & Decorating"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Painting & Decorating</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_garden.svg"
                alt="Icon for Driveway & Garden Landscaping"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Driveway & Garden Landscaping</p>
          </div>
          <div class="joblist-full-label">
            <div class="joblist-label-icon-bg">
              <img
                class="joblist-icon"
                src="../../assets/icons/ico_pmaintenance.svg"
                alt="Icon for Property Maintenance"
                aria-hidden="true"
              />
            </div>
            <p class="p-btn">Property Maintenance</p>
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
.joblist-section {
  background-color: var(--text-c);
}
.container {
  display: flex;
  justify-content: space-between;
  color: var(--primary-c);
}

.joblist-title h2 {
  margin-bottom: var(--m-m);
}

.joblist-list-box {
  display: flex;
  justify-content: space-between;
  gap: var(--m-m);
}

.joblist-full-label {
  display: flex;
  align-items: center;
  gap: var(--s-m);
}
.joblist-label-icon-bg {
  background-color: var(--primary-low-c);
  border-radius: 50%;
}

.joblist-icon {
  width: 36px;
  padding: var(--xs-m);
}

.joblist-specialise-box,
.joblist-experts-box {
  display: flex;
  flex-direction: column;
  gap: var(--s-m);
}

h2,
h3 {
  color: var(--primary-c);
}
</style>
