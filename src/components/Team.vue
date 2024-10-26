<template>
  <section class="py-12 bg-secondary scroll-m-24" id="Team">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-main">Meet Our Team</h2>
      <div class="flex flex-wrap justify-center text-main">
        <div v-for="member in teamMembers" :key="member.id" class="max-w-xs m-4 p-6 ">
          <img :src="member.photo" :alt="member.name" class="w-56 h-56 mx-auto  rounded-md mb-4" />
          <h3 class="text-xl font-semibold">{{ member.name }}</h3>
          <p class="">{{ member.position }}</p>
          <p class="mt-2 text-xs">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Ceo from '../assets/Ceo.jpg'
import rabi from '../assets/rabi.jpg'
import Ahmad from '../assets/Ahmad.jpg'
import cos from '../assets/cos.jpg'
import admin from '../assets/admin.jpg'

export default {
  name: 'TeamSection',
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Cheryl Aminta kwagga',
          position: 'Founder & CEO',
          photo: Ceo
        },
        {
          id: 1,
          name: 'Daniel Orinya',
          position: 'Director Admin',
          photo: admin
        },
        {
          id: 1,
          name: 'Sani Samuel Utene',
          position: 'Chief of Staff',
          photo: cos
        },
        {
          id: 1,
          name: 'Ahmad Abubakar Ahmad',
          position: 'Project Director',
          photo: Ahmad
        },
        {
          id: 1,
          name: 'Rabiatu Suleiman Hussain',
          position: 'Program manager',
          photo: rabi
        },
        // Add more team members as needed
      ]
    };
  }
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
