<template>
  <main class="text-secondary py-10" id="mission">
    <h2 class="font-heading tex-3xl text-center py-6 text-3xl">Our Mission</h2>
    <!-- <section class="grid lg:grid-cols-3 md:grid-cols-2 md:px-10 px-5 gap-5 xl:px-32 md:gap-10">
      <div v-for="obj of objectives" class="h-auto shadow-md hover:scale-105 hover:bg-secondary hover:text-main transition-transform cursor-pointer shadow-secondary/20 p-5 rounded-xl">
      <h3 class="font-heading text-2xl pb-4">{{ obj.heading }}</h3>
      <p>
        {{ obj.paragraph }}
      </p>
      </div>
    </section> -->
    <p class="text-center md:text-xl text-base leading-relaxed lg:px-20  md:px-10 px-5">
      Our mission is to empower communities by providing humanitarian aid,
      promoting healthcare development, and fostering youth resilience through
      mentorship, career development, and mental health support. We are
      committed to combating drug abuse, advocating for human security, and
      advancing environmental sustainability to create healthier, safer, and
      more prosperous societies.
    </p>
    <h2 class="font-heading tex-3xl text-center py-6 text-3xl">Our Vision</h2>
    <!-- <section class="grid lg:grid-cols-3 md:grid-cols-2 md:px-10 px-5 gmd:ap-5 xl text-base:px-32 md:gap-10">
      <div v-for="obj of objectives" class="h-auto shadow-md hover:scale-105 hover:bg-secondary hover:text-main transition-transform cursor-pointer shadow-secondary/20 p-5 roumd:nded-xl text-base">
      <h3 class="font-heading text-2xl pb-4">{{ obj.heading }}</h3>
      <p>
        {{ obj.paragraph }}
      </p>
      </div>
    </section> -->
    <p class="text-center md:text-xl text-base leading-relaxed lg:px-20 md:px-10 px-5">
      We envision a world where vulnerable communities thrive through access to
      comprehensive support services, including healthcare, education, and
      mental well-being. By nurturing youth potential, strengthening community
      resilience, and advocating for environmental and human security, we aim to
      build a future where every individual has the opportunity to live a
      fulfilling and sustainable life.
    </p>
  </main>
</template>
<script setup>
import { ref } from "vue";
const objectives = ref([
  {
    heading: "Humanitarian Aid & Poverty Eradication",
    paragraph:
      "The foundation aims to deliver humanitarian aid, including education and healthcare assistance, while also supporting efforts to eradicate poverty and improve living conditions for vulnerable populations.",
  },
  {
    heading: "Healthcare / Mental Health Support",
    paragraph:
      "The foundation encourages the development and promotion of healthcare services, including training, advocacy, and mental health support, offering psychological services to address mental health challenges and improve overall well-being.",
  },
  {
    heading: "Environmental Sustainability",
    paragraph:
      "The foundation spearheads initiatives aimed at promoting environmental sustainability through awareness campaigns, tree-planting projects, and collaboration with local authorities to address environmental challenges and foster a greener future.",
  },
  {
    heading: "Youth and Career Development",
    paragraph:
      "The foundation serves as a mentorship organization, empowering young individuals to build better lifestyles and develop their career goals through mentorship programs and career guidance initiatives that help them achieve their aspirations.",
  },
  {
    heading: "Support for Vulnerable Groups",
    paragraph:
      "The foundation provides training, support, and assistance to the elderly, disabled, and vulnerable members of the community, while also focusing on empowering women, widows, and other vulnerable groups by providing vocational training and entrepreneurial support.",
  },
  {
    heading: "Community Resilience&Security",
    paragraph:
      "The foundation works towards building community resilience by providing emergency relief, disaster preparedness training, and support services to help communities withstand and recover from crises, while advocating for the protection and security of individuals and communities.",
  },
]);
</script>
