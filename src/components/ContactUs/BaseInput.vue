<template>
  <div class="input-wrap">
    <label></label>
    <input type="text" placeholder="name" />
  </div>
</template>

<!-- <script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script> -->

<style>
.input-wrap {
  padding: 8px;
  width: 256px;
  margin: 0 auto;
}

.input-wrap input {
  height: 24px;
  width: 100%;
  position: relative;
}

.input-wrap input::before {
  content: "";
  position: absolute;
}
</style>
