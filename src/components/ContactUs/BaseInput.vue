<template>
  <div class="input-wrap">
    <div>
      <label class="label">{{ label }}</label>
      <input
        v-if="type != 'textarea'"
        class="input"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder=" "
        :required="required"
        :class="status"
        @focusout="$emit('inputFocusOut', $event.target.value)"
        :name="name"
      />

      <textarea
        v-if="type === 'textarea'"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        name="message"
        id=""
        cols="30"
        rows="10"
        required
        :class="status"
      ></textarea>
      <p class="error">{{ error }}</p>
      <!-- <label class="label">{{ label }}</label> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

const inputData = ref("");
</script>

<style>
.input-wrap {
  width: 100%;
  margin: 0 auto;
  position: relative;
  /* transition: var(--transition); */
}

input {
  height: 24px;
  width: 100%;
  border: none;
}

.input,
textarea {
  position: relative;
  border: 1.7px solid grey;
  border-radius: 1px;
  outline: none;
  background-color: none;
  caret-color: var(--primary-c);
  transition: var(--transition);
}

.input:hover,
textarea:hover {
  border-color: var(--accent-c);
  background-color: var(--accent-low-c);
}

.input:focus,
textarea:focus {
  border-color: var(--primary-c);
  background-color: var(--primary-low-c);
  border-radius: 3px;
}

/* .label {
  position: absolute;
  left: 0.2rem;
  top: 0.4rem;
  padding: 0 0.5rem;
  z-index: 1;
  color: var(--primary-c);
  cursor: text;
  transition: all 0.2s ease-in;
}


.input:focus ~ .label,
input:not(:placeholder-shown).input:not(:focus) ~ .label,
textarea:focus ~ .label,
text:not(:placeholder-shown).input:not(:focus) ~ .label {
  top: -0.6rem;
  font-size: 0.6rem;
} */

label {
  font-size: 0.7rem;
  color: var(--primary-c);
}

.valid {
  border-color: var(--primary-c);
  background-color: var(--primary-low-c);
}

.invalid {
  background-color: #ffbaba;
  border-color: red;
  border-radius: 3px;
}

.error {
  color: red;
  font-size: 0.6rem;
}
</style>
