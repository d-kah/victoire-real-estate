<template>
  <nuxt-link
    class="flex flex-col w-full bg-hover-pastel-blue p-4 pb-8 h-full"
    to="/"
  >
    <div>
      <div
        class="relative w-full"
        :style="`padding-top:${aspectRatio}`"
      >
        <div class="absolute top-0 left-0 right-0 bottom-0">
          <div
            class="h-full w-full"
            :style="`background-size:cover;background-position:center center;background-image: url(${realEstate.imageUrl});`"
          ></div>
        </div>
      </div>
    </div>

    <div class="px-4">
      <div class="mt-8 mb-4">
        <h4
          style="font-size: 1.8rem;"
          class="font-2"
        >{{realEstate.name}}</h4>
        <h4
          style="font-size: 1.8rem;"
          class="font-2 red"
        >{{realEstate.location}}</h4>
      </div>

      <div class="mb-3">—</div>

      <ul>
        <li class="estate-list__price">À partir de {{realEstate.price}} €</li>
        <li>Nombre d'unités proposées: {{realEstate.units}}</li>
        <li>Disponibilité: {{realEstate.availability}}</li>
      </ul>

    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["realEstate"],
  computed: {
    aspectRatio() {
      switch (this.realEstate.imageAspectRatio) {
        case "4:3":
          return "75%";
        case "3:2":
          return "66.66%";
        case "8:5":
          return "62.5%";
        default:
          return "100%";
      }
    },
  },
};
</script>

<style>
</style>