<template>
  <nuxt-link
    class="flex flex-col w-full bg-hover-pastel-blue p-4 pb-8 h-full"
    to="/"
  >
    <div>
      <div
        class="relative w-full"
        style="padding-top:66.66%;"
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
      <div class="my-8">
        <h4
          style="font-size: 1.8rem;"
          class="font-2"
        >{{realEstate.name}}</h4>
        <h4
          style="font-size: 1.8rem;"
          class="font-2 red"
        >{{realEstate.location}}</h4>
      </div>

      <div>—</div>

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
  mounted() {
    console.log(this.realEstate);
  },
  props: ["realEstate"],
};
</script>

<style>
</style>