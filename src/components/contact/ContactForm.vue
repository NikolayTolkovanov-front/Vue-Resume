<script>
import Button from "@/components/reusable/Button.vue";
import FormInput from "@/components/reusable/FormInput.vue";
import FormTextarea from "@/components/reusable/FormTextarea.vue";
import { addBid } from "@/api/api";
import { contactFormInfo } from "@/data/forms";

export default {
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      userName: "",
      userEmail: "",
      userDescription: "",
      category: "",
      contactFormInfo,
    };
  },
  methods: {
    addUserInfo() {
      addBid(this.userName, this.userEmail, this.userDescription);
      this.userName = "";
      this.userEmail = "";
      this.userDescription = "";
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-roboto-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        {{ contactFormInfo.title }}
      </p>
      <form
        method="post"
        @submit.prevent="addUserInfo"
        class="font-roboto-regular space-y-7"
      >
        <FormInput
          v-model="userName"
          :label="contactFormInfo.userName"
          inputIdentifier="name"
        />
        <FormInput
          v-model="userEmail"
          :label="contactFormInfo.email"
          inputIdentifier="email"
          inputType="email"
        />
        <FormTextarea
          v-model="userDescription"
          :label="contactFormInfo.description"
          textareaIdentifier="message"
        />

        <div>
          <Button
            :title="contactFormInfo.submitButton"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
