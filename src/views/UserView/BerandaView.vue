<script setup>
import Navbar from '@/components/NavbarComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import SejarahContent from '@/components/SejarahContent.vue'
import InformasiDataLontar from '@/components/InformasiDataLontar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeroImage from '@/components/HeroImage.vue'
</script>

<template>
  <Navbar />
  <header class="relative">
    <HeroImage />
    <SearchComponent class="absolute top-1/3 left-1/4" />
  </header>
  <main>
    <InformasiDataLontar />
    <SejarahContent />
  </main>
  <FooterComponent />
</template>
