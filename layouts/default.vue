<template>
  <div class="relative h-full">
    <div class="absolute top-0 bottom-0 left-0 right-0 z-20 opacity-008 pointer-events-none overflow-visible">
      <div class="container mx-auto h-full border-111 border-r border-l">
        <div class="flex h-full">
          <div class="h-full w-1/4 border-r border-111"></div>
          <div class="h-full w-1/4 border-r border-111"></div>
          <div class="h-full w-1/4 border-r border-111"></div>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.opacity-008 {
  opacity: 0.08;
}

.border-111 {
  border-color: #111;
}
</style>
