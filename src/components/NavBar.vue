<template>
  <header
    class="flex justify-between items-center lg:px-32 px-5 shadow-md bg-green-100/90 md:h-[10dvh] top-0 sticky z-20 left-0 w-full"
  >
    <section>
      <div class="logo w-14 h-14">
        <a href="#">
          <img src="../assets/logo.png" alt="logo" class="w-full h-full"
        /></a>
      </div>
    </section>
    <section
      class="flex items-center md:flex-row   flex-col justify-center transition-all duration-300 md:justify-start lg:gap-32 gap-24 absolute top-0 right-0 bg-green-200 md:h-14 md:bg-transparent h-[100dvh] w-0 overflow-hidden md:w-auto z-20 md:relative md:pt-0"
      :class="{ showMenu: menuOpen }"
    >
      <div
        class="flex self-end justify-self-start absolute top-4 cursor-pointer md:hidden right-5"
        @click="showMenu"
      >
        <i class="pi pi-times text-4xl text-secondary"></i>
      </div>
      <ul
        class="flex lg:gap-8 md:gap-4 gap-4 md:flex-row flex-col text-base text-secondary font-bold"
      >
        <li>
          <a href="#mission" class="flex items-center gap-2" @click="showMenu"
            >Mission</a
          >
        </li>
        <li>
          <a href="#gallery" class="flex items-center gap-2" @click="showMenu"
            >Gallery</a
          >
        </li>
        <li>
          <a href="#Team" class="flex items-center gap-2" @click="showMenu"
            >Team</a
          >
        </li>
        <li>
          <a href="#events" class="flex items-center gap-2" @click="showMenu"
            >Events</a
          >
        </li>
        <li>
          <a href="#contact" class="flex items-center gap-2" @click="showMenu"
            >Contact</a
          >
        </li>
      </ul>
      <div>
        <a
          href="#contact"
          @click="showMenu"
          class="rounded-lg lg:px-3 md:px-2 px-3 text-xs md-text-base py-3 text-main bg-secondary"
          >Donate now</a
        >
      </div>
    </section>
    <div class="w-10 h-8 md:hidden flex cursor-pointer" @click="showMenu">
      <i class="pi pi-bars text-4xl text-secondary" ></i>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const menuOpen = ref(false);
const showMenu = () => {
  console.log("hello");
  menuOpen.value = !menuOpen.value;
  console.log(menuOpen.value);
};
</script>
<style scoped>
@media screen and (max-width:760px) {
.showMenu {
  width: 100%;
}}
.router-link-exact-active {
  border-bottom: 2px solid greenyellow;
  color: #0f6b50;
}
</style>
