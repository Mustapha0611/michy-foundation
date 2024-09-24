<template>
  <section class="py-12 bg-main px-10">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 font-heading">Upcoming Events</h2>
      <div class="flex flex-wrap justify-center">
        <div v-for="event in events" :key="event.id" class="max-w-xs m-4 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">{{ event.title }}</h3>
          <p class="text-gray-600">{{ event.date }}</p>
          <p class="mt-2 text-gray-700">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const events = ref([
  {
    id: 1,
    title: 'Tree Planting Drive',
    date: 'October 15, 2024',
    description: 'Join us for a tree planting drive to promote environmental sustainability in our community.'
  },
  {
    id: 2,
    title: 'Healthcare Camp',
    date: 'November 10, 2024',
    description: 'Free healthcare services and check-ups for the underprivileged members of our community.'
  },
  {
    id: 3,
    title: 'Youth Mentorship Workshop',
    date: 'December 5, 2024',
    description: 'A workshop aimed at empowering young individuals with career guidance and mentorship.'
  }
  // Add more events as needed
]);
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
