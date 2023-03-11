<template>
  <section class="section contactsection">
    <div class="container">
      <div class="contact-box">
        <div class="contact-text-box">
          <div class="contact-text">
            <h2>Lets have a chat!</h2>
            <p>
              Our goal is to hear and understand your vision. Simply share your
              ideas with us and let us take care of the rest. We will carefully
              plan out the action steps and timeline for the project before we
              begin, ensuring that everything runs smoothly from start to
              finish. With us handling the design and planning, you can sit back
              and relax. All you have to do is reach out to us and share your
              vision, we'll handle the rest!
            </p>
          </div>
          <div class="contact-text">
            <h3>Contact us for any question!</h3>
            <p>
              Happy to answer any of your questions regarding our services and
              how could we help you!
            </p>
          </div>
          <div class="contact-text">
            <h3>Free estimates</h3>
            <p>Our estimates and surveys are free of charge.</p>
          </div>
          <div class="contact-text">
            <h3>You contact us!</h3>
            <p>01296329799</p>
            <p>01296329799</p>
            <p>01296329799</p>
          </div>
        </div>
        <div class="contact-form-box">
          <form
            action="submit"
            @submit.prevent="submitForm"
            class="contact-form"
            ref="form"
            id="form"
          >
            <BaseInput
              v-model="formName"
              label="Name"
              :status="formNameValid"
              :required="true"
              :error="formNameError"
              name="from_name"
            />
            <div class="form-telemail">
              <BaseInput
                v-model="formEmail"
                label="Email"
                type="email"
                :status="formEmailValid"
                :error="formEmailError"
                name="from_email"
              />
              <BaseInput
                v-model="formPhone"
                label="Phone"
                type="tel"
                :status="formPhoneValid"
                :error="formPhoneError"
                name="from_phone"
              />
            </div>
            <BaseInput
              v-model="formMessage"
              label="Message"
              type="textarea"
              :status="formMessageValid"
              :error="formMessageError"
            />
            <div class="loadingDots" v-if="isSending">
              <HollowDotsSpinner
                :animation-duration="1000"
                :dot-size="11"
                :dots-num="3"
                color="var(--primary-c)"
              />
            </div>
            <button
              class="formButton"
              @type="submit"
              v-if="!isSending"
              v-show="!sentStatus"
            >
              {{ submitStatus }}
            </button>
            <p v-if="sentStatus">Message sent! Thank you!</p>
          </form>
        </div>
        <div class="g-recaptcha" @load="handleRecaptcha"></div>
      </div>
    </div>
  </section>
</template>

<!-- :data-sitekey="siteKey" -->

<script>
import { onMounted, ref, watch } from "vue";
import BaseInput from "./BaseInput.vue";
import emailjs from "@emailjs/browser";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  components: { BaseInput, HollowDotsSpinner },
  setup() {
    const isRecaptchaVerified = ref(false);

    const handleRecaptcha = (response) => {
      isRecaptchaVerified.value = true;
      // console.log("reCAPTCHA verified: ", response);
    };

    const formName = ref("");
    const formEmail = ref("");
    const formPhone = ref("");
    const formMessage = ref("");

    const formNameValid = ref("idle");
    const formEmailValid = ref("idle");
    const formPhoneValid = ref("idle");
    const formMessageValid = ref("idle");

    const formNameError = ref("");
    const formEmailError = ref("");
    const formPhoneError = ref("");
    const formMessageError = ref("");

    const form = ref(null);

    const isSending = ref(false);
    const sentStatus = ref(false);
    const submitStatus = ref("Send message!");

    const isFormValid = () => {
      if (
        formNameValid.value === "valid" &&
        formEmailValid.value === "valid" &&
        formPhoneValid.value === "valid" &&
        formMessageValid.value === "valid"
      ) {
        console.log("Form all Valid");
        return true;
      } else {
        console.log("Form not Valid");
        return false;
      }
    };

    const submitForm = async (e) => {
      if (isRecaptchaVerified.value === true && isFormValid()) {
        submitStatus.value = "sending...";
        isSending.value = true;
        await sendEmail();
      }
    };

    const sendEmail = () => {
      const userData = {
        from_name: formName,
        from_email: formEmail,
        from_phone: formPhone,
        message: formMessage,
      };

      emailjs
        .sendForm(
          "bbd_form_contact",
          "bbd_template",
          form.value,
          "f-2vZ5eTGKgH1KAPn"
        )
        .then(
          (result) => {
            console.log("success", result.text);
            sentStatus.value = true;
            isSending.value = false;
            submitStatus.value = "Message sent!";
          },
          (error) => {
            console.log("Failed", error.text);
            sentStatus.value = false;
          }
        );
    };

    const onlyNumbers = (string) => {
      return string.replace(
        /[a-zA-Z`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~£]/,
        ""
      );
    };

    onMounted(() => {
      const siteKey = ref("6Ld7U9AkAAAAALGGlfTWjdLiRtGqSP6lkeC4XFFR");
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey.value, { action: "submit" })
          .then((token) => {
            handleRecaptcha(token);
          });
      });
      watch(formName, () => {
        if (formName.value.length > 2) {
          formNameError.value = "";
          formNameValid.value = "valid";
        } else {
          formNameError.value = "Please enter at least 3 characters";
          formNameValid.value = "invalid";
        }
      });
      watch(formEmail, () => {
        if (formEmail.value.includes("@") && formEmail.value.includes(".")) {
          formEmailError.value = "";
          formEmailValid.value = "valid";
        } else {
          formEmailError.value = "Please enter a valid Email Address";
          formEmailValid.value = "invalid";
        }
      });
      watch(formPhone, () => {
        formPhone.value = onlyNumbers(formPhone.value);
        if (formPhone.value.length === 11) {
          formPhoneError.value = "";
          formPhoneValid.value = "valid";
        } else {
          formPhoneError.value = "Please enter standard UK phone number";
          formPhoneValid.value = "invalid";
        }
      });

      watch(formMessage, () => {
        if (formMessage.value.length < 351) {
          formMessageError.value = "";
          formMessageValid.value = "valid";
        } else {
          formMessageError.value = "Only 350 characters are allowed";
          formMessageValid.value = "invalid";
        }
      });
    });

    return {
      submitForm,
      formName,
      formEmail,
      formPhone,
      formMessage,
      handleRecaptcha,
      formNameValid,
      formEmailValid,
      formPhoneValid,
      formMessageValid,
      onlyNumbers,
      isFormValid,
      formNameError,
      formEmailError,
      formPhoneError,
      formMessageError,
      form,
      sendEmail,
      submitStatus,
      sentStatus,
      isSending,
    };
  },
};
</script>

<style>
.contactsection {
  background-image: url(../../assets/img/contact_hero.webp);
  background-size: cover;
  background-repeat: no-repeat;
  max-height: var(--max-h-section);
  min-height: var(--min-h-section);
}

.contact-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--text-c);
  gap: var(--xl-m);
}

.contact-box h2,
.contact-box h3 {
  color: var(--text-c);
}
.contact-text-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-form-box {
  height: 100%;
  width: 256px;
  background-color: var(--text-c);
  padding: 48px;
}

.contact-form,
.form-telemail {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-content: center;
  justify-items: center;
}

textarea {
  width: 100%;
}

.info-text {
  color: grey;
  font-size: 0.6rem;
}

.formButton {
  display: block;
  padding: 12px;
  background-color: var(--primary-c);
  color: var(--text-c);
  border-radius: var(--border-radius);
  border: none;
  transition: var(--transition);
  font-size: 0.9rem;
  width: 100%;
  margin: 0 auto;
}

.formButton:hover {
  background-color: var(--accent-c);
}

.formButton:active {
  background-color: var(--accent-dark-c);
}

.loadingDots {
  margin: auto;
}

form p {
  color: var(--primary-c);
  text-align: center;
}
</style>
