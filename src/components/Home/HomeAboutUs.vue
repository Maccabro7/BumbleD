<template>
  <section class="section aboutus-section">
    <div class="container">
      <div class="aboutus-text">
        <div class="aboutus-text-main">
          <h3>Lets introduce ourselves</h3>
          <p>
            We bring together a diverse group of experts from the fields of
            architecture, design, and construction under one roof. Our extensive
            experience in the construction industry allows us to offer
            comprehensive services that cover everything from designing and
            planning to construction and finishing touches. Whether you're in
            need of a new building or just want to renovate an existing one,
            we're here to help with all your building needs.
          </p>
          <br />
          <p>
            At our core, we are a team of individuals who are dedicated to
            elevating the construction industry to new heights. We believe that
            building a structure is not just about bricks and mortar, but also
            about creating spaces that cater to the people who will inhabit
            them. That's why we take a more holistic approach to construction,
            one that not only emphasizes quality and cost efficiency, but also
            considers the lifestyle and comfort of those who will live or work
            in the building. Our goal is to create structures that not only
            stand the test of time, but also enhance the way you live. Whether
            you're looking to build a new home or renovate an existing one, we
            are here to turn your vision into a reality, providing you with a
            space that not only meets your needs, but exceeds your expectations.
          </p>
        </div>
        <div class="separator-height"></div>
        <div class="aboutus-side">
          <img
            src="../../assets/img/bumbled_logo_black.svg"
            alt="BumbleD Logo Coloured Version"
            class="aboutus-logo"
          />
          <div class="aboutus-text-side">
            <h3>Our ethic</h3>
            <p>
              At BumbleD, we believe in the power of unity and a balanced
              quality of life. This positive mindset allows us to foster trust
              and build strong relationships with our clients. Our commitment to
              excellence is evident in the high standards we set for ourselves
              and our work, which consistently surpasses what we have achieved
              in the past. Our aim is to set an example and show the world that
              better is possible. By relying on four key principles, we are
              confident that we can make a meaningful impact and inspire others
              to do the same. We are determined to do our part in raising the
              bar in the construction industry.
            </p>
          </div>
        </div>
      </div>
      <div class="aboutus-motto">
        <h1>
          Alone, we achieve <br />
          Together, we strive
        </h1>
      </div>
      <div class="aboutus-principles">
        <div class="aboutus-principle-card">
          <div class="principle-card-bg">
            <img src="../../assets/icons/ico_communication.svg" alt="" />
          </div>
          <div class="principle-card-texts">
            <h4>Communication</h4>
            <p>
              Effective communication is key to overcoming barriers and ensuring
              the success of any project. At BumbleD, we understand the
              importance of staying in touch and keeping you updated on the
              progress of your project. That's why we are always available to
              listen, answer questions, and provide updates at every step of the
              way. You can count on us to ensure clear and open lines of
              communication throughout the entire construction process.
            </p>
          </div>
        </div>
        <div class="aboutus-principle-card">
          <div class="principle-card-bg">
            <img src="../../assets/icons/ico_flexibility.svg" alt="" />
          </div>
          <div class="principle-card-texts">
            <h4>Flexibility</h4>
            <p>
              We recognise that construction projects can often involve
              unforeseen changes and challenges, that's why we approach each
              project with a flexible mindset, ready to adapt and improvise as
              needed. Whether you have a change of vision or unexpected
              circumstances arise, we are committed to building your dream
              exactly as you see it. We believe that our flexibility is what
              sets us apart and allows us to provide exceptional results to our
              clients.
            </p>
          </div>
        </div>
        <div class="aboutus-principle-card">
          <div class="principle-card-bg">
            <img src="../../assets/icons/ico_specteam.svg" alt="" />
          </div>
          <div class="principle-card-texts">
            <h4>Specialised Team</h4>
            <p>
              The expertise and passion of our team members are critical to the
              success of our projects. That's why we carefully match each team
              member with tasks that align with their skills and expertise. Our
              commitment to specialization ensures that our team is able to
              perform at their highest level and deliver exceptional results for
              our clients. With a focus on specialisation and performance, we
              believe that our team is the key to our success and the
              satisfaction of our clients.
            </p>
          </div>
        </div>
        <div class="aboutus-principle-card">
          <div class="principle-card-bg">
            <img src="../../assets/icons/ico_documentation.svg" alt="" />
          </div>
          <div class="principle-card-texts">
            <h4>Documentation</h4>
            <p>
              We understand the importance of detailed and accurate
              documentation for construction projects. Our thorough
              documentation not only allows for control over costs and
              schedules, but also provides clients with peace of mind knowing
              that every aspect of their project is thoroughly recorded. Our
              commitment to meticulous documentation and record keeping sets us
              apart and allows us to deliver exceptional results.
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
.aboutus-section {
  padding: var(--xl-m) 0;
  /* background-color: aqua; */
}

.container {
  display: flex;
  flex-direction: column;
  gap: var(--xl-m);
  align-items: center;
}
.aboutus-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--m-m);
}

.aboutus-text > * {
  flex: 1;
}

.aboutus-logo {
  width: 339px;
}

.aboutus-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.aboutus-motto {
  color: var(--primary-c);
}

.aboutus-principles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--m-m);
}
.aboutus-principle-card {
  display: flex;
  flex-direction: row;
  gap: var(--s-m);
}
.principle-card-bg {
  background-color: var(--text-c);
  max-height: max-content;
  border-radius: 50%;
  display: flex;
}
.principle-card-bg img {
  width: 64px;
  height: 64px;
  padding: 24px;
  align-self: center;
}

.principle-card-texts h4 {
  color: var(--primary-c);
}

h3 {
  color: var(--primary-c);
}

h1 {
  color: var(--accent-c);
}
</style>
