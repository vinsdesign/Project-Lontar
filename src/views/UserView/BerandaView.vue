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
    <SearchComponent />
  </header>
  <main>
    <InformasiDataLontar />
    <SejarahContent />
  </main>
  <FooterComponent />
</template>
