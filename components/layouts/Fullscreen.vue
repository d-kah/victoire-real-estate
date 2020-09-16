<template>
  <div class="relative h-screen">
    <div
      class="bg-cover bg-center h-full bg-gray-200 blend-multiply"
      :style="`min-height:500px;background-image: url(${bgUrl});`"
    >
    </div>
    <div class="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-50"></div>

    <div class="container mx-auto absolute top-0 right-0 left-0 z-10 text-white">
      <div
        class="mt-32 px-6"
        style="font-size:2.8rem;font-weight:600;"
      >
        <nuxt-link to="/">
          <slot></slot>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bgUrl']
};
</script>

<style>
</style>