<template>
  <div class="process-card">
    <div class="process-card-number-bg">
      <p class="processBigNumber">{{ processNumber }}</p>
    </div>
    <div class="process-texts">
      <div class="process-title">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["processNumber", "title", "description"]);
</script>

<style scoped>
.processBigNumber {
  font-family: Metropolis-Black;
  font-size: 6rem;
  color: var(--primary-c);
}

.process-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-m);
  /* max-width: 512px; */
}

.process-card-number-bg {
  background-color: var(--text-c);
  width: 128px;
  height: 128px;
  border-radius: 50%;
  text-align: center;
}

.process-texts {
  max-width: 400px;
}
</style>
