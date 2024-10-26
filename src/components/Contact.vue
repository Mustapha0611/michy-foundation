<template>
  <section
    id="contact"
    class="py-12 md:px-10 bg-green-100 flex items-center gap-4 flex-wrap flex-col md:flex-row"
  >
    <div class="text-center flex-1">
      <h2 class="text-3xl font-bold mb-8 text-secondary">Reach us</h2>
      <form class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div class="mb-4">
          <label for="name" class="block text-left text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-left text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="amount" class="block text-left text-gray-700"
            >Message</label
          >
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            class="w-full border"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-secondary text-white p-2 rounded"
        >
          Send Us a Message
        </button>
      </form>
    </div>

    <div class="p-4 flex-1 flex items-center justify-center flex-col">
      <span class="text-3xl font-mono text-secondary mb-3 text-center"
        >Donate to our course via :</span
      >
      <p class="font-light text-secondary">Michyamin_foundation-SunTrust bank</p>
      <p
        class="mb-2 text-secondary bg-gray-200/30 py-3 px-7 rounded-lg shadow-md hover:scale-105 font-mono text-2xl transition-all cursor-pointer"
      >
        {{ accountNumber }}
      </p>
     
      <button
        @click="copyToClipboard"
        class="px-4 py-2.5 mt-2 bg-secondary mx-auto text-white rounded hover:bg-green-600 transition-colors focus:outline-none"
      >
        Copy
      </button>

      <transition name="fade">
        <p
          v-if="copied"
          class="mt-2 text-green-50 rounded-s-md px-5 z-20 fixed top-5 right-0 py-2 bg-green-700"
        >
         Successfully Copied account number to clipboard!
        </p>
      </transition>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const accountNumber = ref("0024915682");
    const copied = ref(false);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(accountNumber.value);
        copied.value = true;

        setTimeout(() => {
          copied.value = false;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };

    return {
      accountNumber,
      copied,
      copyToClipboard,
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
