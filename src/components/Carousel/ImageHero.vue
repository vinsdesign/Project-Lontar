<template>
  <CarouselImage class="relative w-full h-full" v-slot="{ currentSlide }">
    <SlideImage
      class="w-full h-full relative"
      v-for="(slide, index) in carouselSlides"
      :key="index"
    >
      <div v-show="currentSlide === index + 1" class="carousel-item w-full flex">
        <img
          :src="slide"
          class="w-full bg-cover xxsm:h-[220px] xsm:h-[250px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        />
      </div>
    </SlideImage>
  </CarouselImage>
</template>
<script>
// import components
import CarouselImage from '@/components/Carousel/CarouselImage.vue'
import SlideImage from '@/components/Carousel/SlideImage.vue'

// import bg
import bg1 from '@/components/assets/bg-header(1).jpg'
import bg2 from '@/components/assets/bg-header(2).jpg'
import bg3 from '@/components/assets/bg-header(3).jpg'

export default {
  name: 'BerandaView',
  components: {
    CarouselImage,
    SlideImage
  },
  setup() {
    const carouselSlides = [bg1, bg2, bg3]

    return { carouselSlides }
  }
}
</script>
