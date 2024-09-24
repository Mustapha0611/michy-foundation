<template>
    <div class="lg:px-32 px-5 md:px-10 py-10" id="gallery">
      <h1 class="font-heading text-3xl text-center py-10 text-secondary">Gallery</h1>
      <Splide 
        :options="sliderOptions"
        class="w-full">
        <SplideSlide v-for="(img, index) in images" :key="index" class="h-96 w-96">
          <img :src="img.img" :alt="img.alt" class="w-full h-full object-cover">
        </SplideSlide>
      </Splide>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/splide/dist/css/splide.min.css';
  
  // Import your images
  import img1 from '../assets/child1.jpg';
  import img2 from '../assets/child2.jpg';
  import img3 from '../assets/child3.jpg';
  import img4 from '../assets/child4.jpg';
  import img5 from '../assets/child5.jpg';
  
  const images = ref([
    { img: img1, alt: 'Child playing outdoors' },
    { img: img2, alt: 'Children playing in the park' },
    { img: img3, alt: 'Smiling child with a toy' },
    { img: img4, alt: 'Group of children having fun' },
    { img: img5, alt: 'Child enjoying nature' },
    { img: img2, alt: 'Children playing in the park' },
  ]);
  
  const sliderOptions = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: true,
    pagination: false,
    perPage:3,
    breakpoints: {
      1200: {
        perPage: 4,
      },
      900: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  };
  </script>
  