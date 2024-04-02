<script>
import Navbar from '@/components/NavbarComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import SejarahContent from '@/components/SejarahContent.vue'
import InformasiDataLontar from '@/components/InformasiDataLontar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CarouselImage from '@/components/CarouselImage.vue'
import SlideImage from '@/components/SlideImage.vue'

export default {
  name: 'BerandaView',
  components: {
    Navbar,
    SearchComponent,
    SejarahContent,
    InformasiDataLontar,
    CarouselImage,
    SlideImage,
    FooterComponent
  },
  setup() {
    const carouselSlides = ['Bg-header(1)', 'Bg-header(2)', 'Bg-header(3)']

    return { carouselSlides }
  }
}
</script>

<template>
  <Navbar />
  <header class="relative">
    <SearchComponent />
  </header>
  <main>
    <InformasiDataLontar />
    <SejarahContent />
    <CarouselImage>
      <SlideImage v-for="(slide, index) in carouselSlides" :key="index">
        <div>
          <p>hello</p>
        </div>
      </SlideImage>
    </CarouselImage>
  </main>
  <FooterComponent />
</template>
