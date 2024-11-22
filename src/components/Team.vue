<template>
  <section class="py-12 bg-secondary scroll-m-24" id="Team">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-main" data-aos="fade-up" data-aos-duration="400">Meet Our Team</h2>
      <div class="lg:grid grid-cols-4 flex flex-wrap justify-center text-main">
        <div v-for="member in teamMembers" :key="member.id" class="max-w-xs p-6 " data-aos="fade-up">
          <img :src="member.photo" :alt="member.name" class="w-56 h-56 mx-auto aspect-square object-cover center  rounded-md mb-4" />
          <h3 class="text-md font-semibold">{{ member.name }}</h3>
          <p class="">{{ member.position }}</p>
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-8 text-main" data-aos="fade-up" data-aos-duration="400">Board of trustees</h2>
        <div class="lg:grid grid-cols-5 px-10 md:px-0 gap-10 lg:gap-4 flex flex-wrap justify-center text-main">
          <p class="flex flex-col items-center">
            <span class="font-bold text-xl">
              Cheryl Aminta Kwagga 
            </span>
            <span class="font-light">
              Founder/Ceo
            </span>
          </p>
          <p class="flex flex-col items-center">
            <span class="font-bold text-xl">
              ⁠Samuel Ebi Awala
            </span>
            <span class="font-light">
              Vice President 1
            </span>
          </p>
          <p class="flex flex-col items-center">
            <span class="font-bold text-xl">
              Lydia Sara Bulus 
            </span>
            <span class="font-light">
              Vice President 2
            </span>
          </p>
          <p class="flex flex-col items-center">
            <span class="font-bold text-xl">
              ⁠Harrieta Tekena Briggi
            </span>
            <span class="font-light">
              Secretary 

            </span>
          </p>
          <p class="flex flex-col items-center">
            <span class="font-bold text-xl">
              ⁠Blessing Ogwuche 
            </span>
            <span class="font-light">
              Treasurer
            </span>
          </p>
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
import sam from  '../assets/sam.jpg'
import jake  from '../assets/jake.jpg'



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
          id: 4,
          name: 'Sani Samuel Utene',
          position: 'Chief of Staff',
          photo: cos
        },
        {
          id: 2,
          name: 'Daniel Orinya',
          position: 'Director Admin',
          photo: admin
        },
        {
          id: 3,
          name: 'Idowu Jacobs',
          position: 'Director Special services',
          photo: jake
        },
        {
          id: 5,
          name: 'Ahmad Abubakar Ahmad',
          position: 'Program Director',
          photo: Ahmad
        },
        {
          id: 6,
          name: 'Rabiatu Suleiman Hussain',
          position: 'Program manager',
          photo: rabi
        },
        {
          id: 7,
          name: 'Samuel Omomoh',
          position: 'Media Director',
          photo: sam
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
