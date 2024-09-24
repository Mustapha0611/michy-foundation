<template>
  <section id="contact" class="py-12 px-10 bg-green-100" >
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Support Our Mission</h2>
      <form class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div class="mb-4">
          <label for="name" class="block text-left text-gray-700">Name</label>
          <input type="text" id="name" class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-left text-gray-700">Email</label>
          <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div class="mb-4">
          <label for="amount" class="block text-left text-gray-700">Donation Amount</label>
          <input type="number" id="amount" class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" class="w-full bg-secondary text-white p-2 rounded">Donate Now</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic here
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
