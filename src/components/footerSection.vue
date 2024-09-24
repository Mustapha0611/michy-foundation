<template>
  <div class="bg-secondary">
    <div class="flex py-10 md:px-32 text-xs flex-wrap items-center lg:text-base px-5 justify-between text-main">
        <span>© Copyright 2024, All Rights Reserved</span>
        <section class="flex-1 flex gap-7 justify-center ">
      <span v-for="(social, index) of socials" :key="index" class="w-10 h-10">
        <img :src="social.logo" alt="social links" class="w-full h-full" />
      </span>
    </section>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import fb from "@/assets/fb.png";
import tt from "@/assets/tt.png";
import ig from "@/assets/ig.png";
import linkedin from "@/assets/linkedin.png";
const socials = ref([
  {
    logo: fb,
  },
  {
    logo: ig,
  },
  {
    logo: tt,
  },
  {
    logo: linkedin,
  },
]);
</script>
