<template>
  <div class="w-full h-full">
    <slot :currentSlide="currentSlide" />
    <!-- Navigation Carousel -->
    <div
      class="w-full h-full px-4 flex absolute top-[0%] left-0 justify-center items-center text-white font-semibold"
    >
      <div class="flex flex-1">
        <ChevronLeftIcon
          @click="prevSlide"
          class="lg:h-8 lg:w-8 xxsm:h-6 xxsm:w-6 cursor-pointer hover:scale-125 transition-all rounded-full bg-mediumBlue flex justify-center items-center p-2"
        />
      </div>
      <div class="flex flex-1 justify-end">
        <ChevronRightIcon
          @click="nextSlide"
          class="lg:h-8 lg:w-8 xxsm:h-6 xxsm:w-6 cursor-pointer hover:scale-125 transition-all rounded-full bg-mediumBlue flex justify-center items-center p-2"
        />
      </div>
    </div>

    <!-- pagination Carousel -->
    <div class="absolute bottom-[5%] w-full flex justify-center items-center gap-2">
      <span
        @click="goToSlides(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        class="bg-white rounded-full cursor-pointer lg:h-4 lg:w-4 xxsm:h-3 xxsm:w-3"
        :class="{ 'bg-orangePastel': index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
// import Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  setup() {
    const currentSlide = ref(1)
    const getSlideCount = ref(null)
    const autoPlayEnable = ref(true)
    const timeOutDuration = ref(3000)

    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return
      }
      currentSlide.value += 1
    }
    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1
        return
      }
      currentSlide.value -= 1
    }
    // go to slides
    const goToSlides = (index) => {
      currentSlide.value = index + 1
    }

    // autoplay function
    const autoplay = () => {
      setInterval(() => {
        nextSlide()
      }, timeOutDuration.value)
    }
    if (autoPlayEnable.value) {
      autoplay()
    }
    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length
      console.log(getSlideCount.value)
    })
    return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlides }
  }
}
</script>
