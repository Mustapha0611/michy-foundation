<template>
  <main class="lg:h-[100dvh] h-auto w-full bg-main text-green-950">
    <!-- <NavBar /> -->
    <div
      class="flex flex-col md:flex-row items-center py-10 md:py-20 lg:py-0 gap-10 px-5 lg:px-32 lg:h-[90dvh]"
    >
      <section class="flex-1 flex flex-col gap-4">
        <h1
          class="md:text-4xl text-2xl font-semibold font-heading leading-loose"
          data-aos="fade-in"
          data-aos-delay="900"
        >
          Together for a Healthier and Educated Future.
        </h1>
        <p class="text-base" data-aos="fade-in" data-aos-delay="1100">
          Join us in our mission to promote a healthy environment, provide
          healthcare, and ensure education for all
        </p>
        <div class="flex">
          <a
            href="#contact"
            class="md:w-48 w-32 text-center py-4 rounded-md border-2 hover:bg-main hover:text-secondary transition-colors duration-1000 border-secondary text-xs md:text-base bg-secondary text-main"
            data-aos="fade-in"
            data-aos-delay="1400"
            >Donate Now</a
          >
        </div>
      </section>
      <section class="flex-1 flex justify-center md:pb-0">
        <div
          class="md:w-[80%] lg:h-[450px] lg:w-[460px] sm:h-[350px] sm:w-[350px] w-[300px] h-[300px] object-contain rounded-full overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="4000"
        >
          <img
            src="@/assets/child1.jpg"
            alt="hero image"
            class="w-full h-full"
          />
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
// import NavBar from "./NavBar.vue";
</script>
<style scoped>
h1 {
  font-family: "Archivo Black", sans-serif;
  line-height: 1.4;
}
</style>
