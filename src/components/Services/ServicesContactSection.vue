<template>
  <section class="section servicesContact-section">
    <div class="container">
      <div class="servContactTexts">
        <div class="servContact-Title">
          <h2>Got any questions?</h2>
          <h3>Ready to have a chat?</h3>
        </div>
        <div class="servContact-Text">
          <p><strong>More than happy to answer!</strong></p>
          <p>
            Use the contact form to send us a message and we’ll get back at you
            in no time!
          </p>
        </div>
        <router-link :to="{ name: 'contact' }" class="navButton"
          >Contact us</router-link
        >
      </div>
      <div class="servContactImage">
        <img src="../../assets/img/img_mail 1.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--l-m);
}

.servContactTexts {
  display: flex;
  flex-direction: column;
  gap: var(--s-m);
}

.servContactTexts .navButton {
  width: max-content;
}
</style>
