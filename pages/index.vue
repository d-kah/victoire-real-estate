<template>
  <div>
    <div class="relative">
      <div class="z-10 relative lg:absolute top-0 left-0 right-0">
        <div class="container mx-auto">
          <Nav id="nav" />

          <div class="absolute overflow-hidden text-white">
            <h1 class="ml-1 mt-5 masthead-text">Découvrez notre portfolio<br>immobilière</h1>
          </div>
        </div>
      </div>

      <!-- masthead image -->
      <div class="zn1 lg:absolute left-0 right-0 top-0 bottom-0">
        <div
          class="lg:sticky top-0 h-full lg:h-screen bg-gray-200 blend-multiply"
          :style="`min-height:500px;background-size:cover;background-position:center center;background-image: url(${bgUrl});`"
        >
        </div>
        <div
          ref="bgOverlay"
          style="opacity: 0.3;"
          class="bg-black absolute top-0 left-0 right-0 bottom-0"
        ></div>
      </div>
      <!-- lg:push content 100vh down -->
      <div class="hidden lg:block h-screen"></div>

      <LeftSticky :realEstates="realEstates.sale" />

    </div>

    <div class="relative h-screen">
      <div
        class="h-full bg-gray-200 blend-multiply"
        :style="`min-height:500px;background-size:cover;background-position:center center;background-image: url(${bgUrl2});`"
      >
      </div>
      <div class="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-50"></div>

      <div class="container mx-auto absolute top-0 right-0 left-0 z-10 text-white">
        <div
          class="mt-32 px-6"
          style="font-size:2.8rem;font-weight:600;"
        >
          <nuxt-link to="/">
            <h4>Parcourir notre biens immobiliers<br> à vendre</h4>
          </nuxt-link>

        </div>
      </div>
    </div>

    <div class="relative">
      <div class="hidden lg:block absolute top-0 left-0  bottom-0 w-1/2 bg-gold"></div>
      <div class="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 bg-gray"></div>
      <div class="relative container mx-auto">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full mx-auto text-white bg-gold lg:bg-transparent">
            <div class="px-32 my-32">
              <h4
                class="mb-8"
                style="font-size:2.8rem;font-weight:600;line-height:1.1;"
              >Abonnez-vous à la newsletter</h4>
              <input
                class="mb-3 appearance-none w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Votre adresse email"
              >
              <button class="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6">
                OK
              </button>
            </div>

          </div>
          <div class="w-full mx-auto text-white bg-gray lg:bg-transparent">
            <div class="px-32 my-32 mt-40">
              <nuxt-link
                to="/"
                class="inline-block"
              >
                <h4
                  class="mb-8"
                  style="font-size:2.8rem;font-weight:600;line-height:1.1;"
                >Évaluation immobilière</h4>
                <button class="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6">
                  En savoir plus
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative h-screen">
      <div
        class="h-full bg-gray-200 blend-multiply"
        :style="`min-height:500px;background-size:cover;background-position:center center;background-image: url(${bgUrl3});`"
      >
      </div>
      <div class="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-50"></div>

      <div class="container mx-auto absolute top-0 right-0 left-0 z-10 text-white">
        <div
          class="mt-32 px-6"
          style="font-size:2.8rem;font-weight:600;"
        >
          <nuxt-link to="/">
            <h4>Trouver un bien<br> à louer</h4>
          </nuxt-link>

        </div>
      </div>
    </div>

    <footer class="relative bg-gray py-8 md:py-10">
      <div class="border-t border-b border-light-grey text-white">
        <div class="flex flex-wrap container mx-auto pt-8 pb-10 uppercase">
          <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6">
            <div class="font-bold">BUREAU UCCLE</div>
            <div class="md:block">—</div>
            <p>Chaussée de Waterloo<br>1382 - 1180<br>Uccle</p>
            <div class="mt-5">
              <p>Vente: <span class="whitespace-no-wrap">+32 (0)2 375 10 00</span></p>
              <p>Location: <span class="whitespace-no-wrap">+32 (0)2 375 10 20</span></p>
              <p>Neuf: <span class="whitespace-no-wrap">+32 (0)2 375 10 10</span></p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6">
            <div class="font-bold">BUREAU WOLUWE</div>
            <div class="md:block">—</div>
            <p>Avenue de Tervueren<br>418 - 1150<br>Woluwe-St-Pierre</p>
            <div class="mt-5">
              <p>Vente: <span class="whitespace-no-wrap">+32 (0)2 772 15 30</span></p>
              <p>Location: <span class="whitespace-no-wrap">+32 (0)2 771 12 40</span></p>
              <p>Neuf: <span class="whitespace-no-wrap">+32 (0)2 777 15 10</span></p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6">
            <div class="font-bold">HORAIRES D'OUVERTURES</div>
            <div class="md:block">—</div>
            <p>lundi au vendredi:<br>9h&nbsp;—&nbsp;18h</p>
            <p>samedi:<br>10h&nbsp;—&nbsp;13h (à Uccle)</p>
          </div>
          <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6">
            <div class="font-bold">SUIVEZ NOUS</div>
            <div class="md:block">—</div>
            <nuxt-link
              to="/"
              class="block"
            >
              Instagram
            </nuxt-link>
            <nuxt-link
              to="/"
              class="block"
            >
              Facebook
            </nuxt-link>
            <nuxt-link
              to="/"
              class="block"
            >
              Twitter
            </nuxt-link>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  mounted() {
    /*
    const nav = document.querySelector("#nav");
    this.navBottom = nav.offsetHeight;

    //let bgOverlayOpacity = this.$refs.bgOverlay.style.opacity;

    window.addEventListener("scroll", this.onScroll);
    */
  },
  data: () => ({
    navBottom: null,
    oldScroll: 0,
    bgUrl:
      "https://www.victoire.be/sites/default/files/styles/hero/public/whise/3916713/86c34e464291430da2f7c376a3619ff4.jpg?itok=BvR6ZJhe",
    bgUrl2:
      "https://www.victoire.be/sites/default/files/styles/hero/public/whise/3916713/5076a14513654178b51880b484f56d2b.jpg?itok=tt4q4Qon",
    bgUrl3:
      "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4072577/eb8fbd8d3da94fe7b3a1ab1754320541.jpg?itok=Bi6tLs_7",
    realEstates: {
      sale: [
        {
          name: "Jade 191",
          location: "Auderghem",
          price: "657.000",
          units: 4,
          availability: "à l'acte",
          imageUrl:
            "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4005986/2596f76db3b842548ef31eb710ba7b66.jpg?itok=NNaG9cej",
        },
        {
          name: "Tervuren Corner T13",
          location: "Tervuren",
          price: "750.000",
          units: 7,
          availability: "à l'acte",
          imageUrl:
            "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4019073/e2510d6ca38244d5adc9d9c473ba3f5b.jpg?itok=AKsyfpvs",
        },
        {
          name: "Villa",
          location: "Uccle",
          price: "1.500.000",
          units: 4,
          availability: "à l'acte",
          imageUrl:
            "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4078639/692c5bcfb09e42668641d70f905676fe.jpg?itok=cuQ4OvIm",
        },
        {
          name: "Grandchamp",
          location: "Woluwe-Saint-Pierre",
          price: "2.450.000",
          units: 9,
          availability: "à l'acte",
          imageUrl:
            "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4142710/c51fc1173a094bc7a42fbbf8e34cd3f6.jpg?itok=a7tEmRyc",
        },
        {
          name: "Ravenstein Golf Club",
          location: "Tervuren",
          price: "4.750.000",
          units: 6,
          availability: "à l'acte",
          imageUrl:
            "https://www.victoire.be/sites/default/files/styles/hero/public/whise/3917409/cc5fa5ecc2d847089aa0a8706b66bbee.jpg?itok=bwCGBfqL",
        },
        {
          name: "Fort Jaco",
          location: "Uccle",
          price: "495.000",
          units: 3,
          availability: "à l'acte",
          imageUrl:
            "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4146155/7aac536c273a4e0eb9a233e3d49d3b42.jpg?itok=aMotcnLx",
        },
      ],
    },
  }),
  watch: {
    scrollPos(newPos, oldPos) {
      //console.log(newPos,oldPos);
    },
  },
  methods: {},
};
</script>

<style>
.bg-hover-pastel-yellow:hover {
  background-color: #fffff5;
}

.bg-hover-pastel-blue:hover {
  background-color: #f3f7fa;
}

.bg-gray {
  background-color: #7a7d85;
}

.border-light-grey {
  border-color: #70737a;
}

.red {
  color: #cb0000;
}

.column-gap-1 {
  column-gap: 4rem;
}

.column-count-2 {
  column-count: 2;
}

.font-2 {
  font-family: "Lusitana", serif;
}

.font-1 {
  font-family: inter, serif;
}

body {
  font-family: inter, serif;
}

.blend-multiply {
  background-blend-mode: multiply;
}

.masthead-text {
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1.1;
}

@screen lg {
  .masthead-text {
    font-size: 3em;
  }

  .overlap-1 {
    margin-top: -20vh;
  }

  .overlap-2 {
    margin-top: -30vh;
  }
}

@screen md {
  .md\:overlap-8vh {
    margin-top: -8vh;
  }
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* 
@screen md {
  .test {
    @apply inline-block;
  }
} 
*/

.container {
  max-width: 1500px;
}

.zn1 {
  z-index: -1;
}

.border-color-card {
  border-color: #70737a;
}

.bg-primary {
  background-color: #cd4749;
}

.bg-gold {
  background-color: #a0998f;
}

.cardSm {
  /* min-height: 524px; */
}

/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
*/

/* md breakpoint */
@media only screen and (min-width: 768px) {
}

/* lg breakpoint */
@media only screen and (min-width: 1024px) {
  .lg\:overlap-30vh {
    margin-top: -5vh;
  }
}
</style>
