<template>
  <div class="relative lg:overlap-30vh">

    <div class="container mx-auto">

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2">

          <!-- CardSm -->
          <div class="lg:hidden flex flex-col md:flex-row">
            <div class="w-full bg-white md:border-r border-color-card cardSm">
              <CardSm :realEstate="realEstates[0]" />
            </div>

            <div class="w-full bg-white border-t md:border-r border-color-card cardSm md:overlap-8vh">
              <CardSm :realEstate="realEstates[1]" />
            </div>
          </div>

          <!-- CardLg -->
          <div class="lg:absolute top-0 left-0 right-0 bottom-0">
            <div class="container mx-auto h-full">
              <div class="sticky top-0 w-full lg:w-1/2 bg-white border-t lg:border-t-0 lg:border-r border-color-card">
                <CardLg />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <!-- CardSm -->
          <div class="relative bg-gold lg:bg-transparent-important">
            <div class="flex flex-col md:flex-row">
              <div class="w-full lg:w-1/2 overlap-1">
                <div class="w-full bg-white md:border-r border-color-card cardSm hidden lg:block">
                  <CardSm :realEstate="realEstates[0]" />
                </div>
                <div class="bg-white border-t md:border-r border-color-card cardSm">
                  <CardSm :realEstate="realEstates[2]" />
                </div>
                <div class="bg-white border-t md:border-r border-color-card cardSm">
                  <CardSm :realEstate="realEstates[3]" />
                </div>
              </div>
              <div class="w-full lg:w-1/2 overlap-2">
                <div class="bg-white md:border-r border-color-card cardSm hidden lg:block">
                  <CardSm :realEstate="realEstates[1]" />
                </div>
                <div class="bg-white border-t md:border-r border-color-card cardSm">
                  <CardSm :realEstate="realEstates[4]" />
                </div>
                <div class="bg-white border-t md:border-r border-color-card cardSm">
                  <CardSm :realEstate="realEstates[5]" />
                </div>
              </div>
            </div>
          </div>
          <!-- sm:md:cardSm -->
        </div>
      </div>
    </div>

    <div class="flex md:justify-end">
      <div class="w-full lg:w-1/2 bg-gold col-start-2 relative">
        <div class="my-40 lg:my-32 xl:my-48 px-10 lg:px-20">
          <h4 class="bg-text text-white mb-6">Nos services immobiliers</h4>
          <div class="flex flex-wrap ">
            <nuxt-link
              class="uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3"
              to="/"
            >
              vente
            </nuxt-link>
            <nuxt-link
              class="uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3"
              to="/"
            >
              location
            </nuxt-link>
            <nuxt-link
              class="whitespace-no-wrap uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3"
              to="/"
            >
              Expertise & conseils
            </nuxt-link>
            <nuxt-link
              class="whitespace-no-wrap uppercase mr-5 mb-5 bg-white text-indigo-900 hover:bg-red-700 font-medium py-2 px-3"
              to="/"
            >
              Recherche de biens
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("leftSticky", this.realEstates);
  },
  props: ["realEstates"],
};
</script>

<style>
</style>



   
