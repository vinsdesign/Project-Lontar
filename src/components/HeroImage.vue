<template>
  <div class="relative w-full h-full">
    <div class="carousel w-full h-full relative">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item w-full"
        @click="handleImageClick(index)"
      >
        <img :src="getImagePath(image)" class="w-full" />
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 flex justify-end z-10 w-full py-2 gap-2 pr-9 pb-5">
      <a
        v-for="(image, index) in images"
        :key="index"
        :href="'#item' + (index + 1)"
        class="py-2 px-2 bg-white rounded-full border-gray-400"
        :class="{ 'bg-mediumBlue': index === currentIndex }"
        @click="goToImage(index)"
      ></a>
    </div>
  </div>
</template>

<script>
import bg1 from '../../public/assets/bg-header(1).jpg'
import bg2 from '../../public/assets/bg-header(2).jpg'
import bg3 from '../../public/assets/bg-header(3).jpg'

export default {
  setup() {
    const images = [bg1, bg2, bg3]

    const getImagePath = (imageName) => {
      return imageName
    }

    let currentIndex = 0

    const handleImageClick = (index) => {
      currentIndex = index

      scrollCarouselToIndex(index)
    }

    const goToImage = (index) => {
      currentIndex = index

      scrollCarouselToIndex(index)
      startAutoChange()
      return currentIndex
    }

    const scrollCarouselToIndex = (index) => {
      const carouselElement = document.querySelector('.carousel')
      const carouselItemWidth = carouselElement.offsetWidth
      carouselElement.scrollLeft = carouselItemWidth * index
    }

    let intervalId = null
    const startAutoChange = () => {
      clearInterval(intervalId)
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length
        scrollCarouselToIndex(currentIndex)
      }, 5000)
    }

    const stopAutoChange = () => {
      clearInterval(intervalId)
    }

    startAutoChange()

    return {
      images,
      getImagePath,
      handleImageClick,
      goToImage,
      startAutoChange,
      stopAutoChange
    }
  }
}
</script>
