<template>
  <section class="py-12 bg-secondary scroll-m-24" id="Team">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-main">Meet Our Team</h2>
      <div class="flex flex-wrap justify-center text-main">
        <div v-for="member in teamMembers" :key="member.id" class="max-w-xs m-4 p-6 ">
          <img :src="member.photo" :alt="member.name" class="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 class="text-xl font-semibold">{{ member.name }}</h3>
          <p class="">{{ member.position }}</p>
          <p class="mt-2 text-xs">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import woman from '../assets/black-woman.png'
import Ceo from '../assets/Ceo.jpg'
import whitewoman from '../assets/white-woman.png'
export default {
  name: 'TeamSection',
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Michy Amin',
          position: 'Founder & CEO',
          bio: 'John is passionate about environmental sustainability and community development.',
          photo: Ceo
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'Healthcare Director',
          bio: 'Jane has over 20 years of experience in healthcare and mental health support.',
          photo: woman
        },
        {
          id: 3,
          name: 'Emily Johnson',
          position: 'Education Coordinator',
          bio: 'Emily is dedicated to providing quality education to underprivileged communities.',
          photo: whitewoman
        }
        // Add more team members as needed
      ]
    };
  }
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
