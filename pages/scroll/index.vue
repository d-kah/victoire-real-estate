<template>
  <div>
    <div class="relative h-screen">
      <div class="absolute top-0 bottom-0 left-0 right-0 z-10">
        <div class="flex justify-center items-center h-full w-full">
          <div
            id="test"
            class="p-6 bg-red-300"
          >123</div>
        </div>
      </div>
    </div>

    <p
      v-for="(p,idx) in 120"
      :key="idx"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est asperiores amet incidunt quisquam deleniti, harum labore vel nisi, ipsum debitis. Dicta quam aperiam unde ex illum quos, porro eligendi.</p>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    y1: 70,
    y2: 120,
    property: "--profile",
    from: 1,
    to: 0.5,
    currentPercent: 0,
    suffix: null,
  }),
  methods: {
    lerp(start, end, t) {
      return start * (1 - t) + end * t;
    },
    percentage(a, b, v) {
      return this.clamp((v - a) / (b - a));
    },
    clamp(v, min = 0, max = 1) {
      return Math.min(max, Math.max(min, v));
    },
    scroll() {
      // Calculate where we are between y1 and y2
      console.log(window.scrollY);
      const percent = this.percentage(this.y1, this.y2, window.scrollY);
      if (this.currentPercent !== percent) {
        this.currentPercent = percent;

        window.requestAnimationFrame(() => {
          const property = this.lerp(this.from, this.to, this.currentPercent);

          document.documentElement.style.setProperty(
            this.property,
            property + (this.suffix || null)
          );
        });
      }
    },
  },
};
</script>

<style>
#test {
  transform: scale(var(--profile));
}
</style>