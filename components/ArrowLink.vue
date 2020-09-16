<template>
  <nuxt-link
    class="link-arrow lg:flex"
    to="/"
  >
    <div class="w-20">
      <svg
        height="40"
        width="42"
      >
        <line
          x1="0"
          y1="20"
          x2="40"
          y2="20"
          style="stroke:white;stroke-width:2"
        />
        <path
          fill="none"
          stroke="white"
          stroke-width="2"
          d="M32 28 L40 20 L32 12"
        />
        <path d="M150 0 L75 200 L225 200 Z" />
      </svg>
    </div>

    <slot>
      <h1 class="ml-1 masthead-text">Découvrez notre portfolio<br>immobilière</h1>
    </slot>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style>
</style>