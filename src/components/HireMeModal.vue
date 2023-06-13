<script>
import Button from "@/components/reusable/Button.vue";
import FormInput from "@/components/reusable/FormInput.vue";
import FormTextarea from "@/components/reusable/FormTextarea.vue";
import { addBid } from "@/api/api";
import { contactFormInfo } from "@/data/forms";

export default {
  props: {
    showModal: {
      type: Function
    },
    modal: {
      type: Boolean
    },
  },
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      userName: "",
      userEmail: "",
      userDescription: "",
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
  <transition name="fade">
    <div v-show="modal" class="font-roboto-regular fixed inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
      ></div>
      <!-- Modal content -->
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
            >
              <div
                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
              >
                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                  {{ contactFormInfo.title }}
                </h5>
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <font-awesome-icon icon="fa-solid fa-xmark" size="2xl" />
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <form
                  @submit.prevent="addUserInfo"
                  class="max-w-xl m-4 text-left"
                >
                  <FormInput
                    v-model="userName"
                    :label="contactFormInfo.userName"
                    inputIdentifier="name"
                    class="mb-2"
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
                    textareaIdentifier="details"
                    class="mt-2"
                  />

                  <div class="mt-7 pb-4 sm:pb-1">
                    <Button
                      :title="contactFormInfo.submitButton"
                      class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                      type="submit"
                      :aria-label="contactFormInfo.submitButton"
                    />
                  </div>
                </form>
              </div>
              <div
                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
              >
                <Button
                  title="Закрыть"
                  class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                  @click="showModal()"
                  aria-label="Close Modal"
                />
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style scoped>
.modal-body {
  max-height: 570px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
