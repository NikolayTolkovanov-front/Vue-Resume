<script>
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";
import { addBid } from "../../api/api";

export default {
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      userName: "",
      userEmail: "",
      userDescription: "",
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
        Заполните поля для обработки вашего заказа
      </p>
      <form
        method="post"
        @submit.prevent="addUserInfo"
        class="font-roboto-regular space-y-7"
      >
        <FormInput
          v-model="userName"
          label="Полное имя"
          inputIdentifier="name"
        />
        <FormInput
          v-model="userEmail"
          label="Email"
          inputIdentifier="email"
          inputType="email"
        />
        <FormTextarea
          v-model="userDescription"
          label="Описание задачи"
          textareaIdentifier="message"
        />

        <div>
          <Button
            title="Отправить"
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
