<script>
// Search icon
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    MagnifyingGlassIcon
  }
}
</script>

<template>
  <!-- header -->
  <header
    class="bg-hero xxsm:h-[200px] xsm:h-[250px] sm:h-[300px] sm:bg-cover sm:w-full md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[650px] w-full bg-cover flex flex-col justify-center items-center"
  >
    <h1
      class="text-white font-medium xxsm:text-bas xsm:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
    >
      Mulai Eksplorasi
      <span class="font-bold text-orangePastel">Pencarian Lontar</span>
    </h1>
    <form action="" class="">
      <div class="flex m-0 drop-shadow-[1px_4px_43.4px_rgba(0,0,0,0.50)]">
        <div class="relative flex items-center text-light-secondary focus-within:text-mediumBlue">
          <MagnifyingGlassIcon
            class="absolute h-5 w-5 xxsm:mt-2 xxsm:ml-3 xxsm:text-[26px] mt-5 ml-5 text-[28px]"
            name="search"
          ></MagnifyingGlassIcon>
          <input
            type="text"
            placeholder="Cari Lontar"
            name="cari"
            autocomplete="off"
            aria-label="Cari Lontar"
            class="mt-5 xxsm:mt-2 xxsm:pl-12 px-16 placeholder-darkSecondary focus:placeholder-lightBlue xxsm:w-[200px] xxsm:h-9 sm:text-xl xsm:w-[250px] xsm:h-9 sm:w-[350px] sm:h-10 md:text-xl lg:text-2xl md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[55px] xl:w-[500px] xl:h-[60px] 2xl:w-[700px] 2xl:h-[70px] rounded-s-[15px] border-none ring-2 ring-mediumBlue focus:ring-orangePastel focus:ring-2"
          />
        </div>
        <button
          type="submit"
          class="bg-mediumBlue xxsm:mt-2 xxsm:text-base sm:px-3 xsm:text-lg xxsm:px-3 xsm:px-3 sm:text-xl md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[55px] xl:w-[120px] xl:h-[60px] 2xl:w-[120px] 2xl:h-[70px] mt-5 text-orangePastel text-[24px] rounded-r-[15px] ring-2 ring-mediumBlue"
        >
          Cari
        </button>
      </div>
    </form>
  </header>
  <!-- end header -->
</template>
