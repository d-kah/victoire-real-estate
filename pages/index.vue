<template>
  <div>
    <div class="relative ">
      <div class="z-10 relative lg:absolute top-0 left-0 right-0 bottom-0">
        <div class="container mx-auto">
          <Nav id="js-nav" class="" />

          <div class="absolute overflow-hidden text-white">

            <div
              id="js-masthead-text"
              class="pb-48 pt-5 ml-5"
            >
              <ArrowLink>
                <h4 class="bg-text">Découvrez notre portfolio<br>immobilière</h4>
              </ArrowLink>
            </div>

          </div>
        </div>
      </div>

      <!-- masthead image -->
      <div class="zn1 lg:absolute left-0 right-0 top-0 bottom-0">
        <div
          class="lg:sticky top-0 h-full lg:h-screen bg-gray-200 blend-multiply"
          :style="`min-height:500px;background-size:cover;background-position:center center;background-image: url(${bgUrls[0]});`"
        >
        </div>
        <div
          :style="`opacity:${currentOpacity}`"
          class="bg-overlay bg-black absolute top-0 left-0 right-0 bottom-0"
        ></div>
      </div>
      <!-- lg:push content 100vh down -->
      <div class="hidden lg:block h-screen"></div>

      <LeftSticky
        id="js-below-masthead"
        :realEstates="realEstates"
      />
    </div>

    <Fullscreen :bgUrl="bgUrls[1]">
      <ArrowLink>
        <h4 class="bg-text">Parcourir notre biens immobiliers<br> à vendre</h4>
      </ArrowLink>
    </Fullscreen>

    <div class="relative">
      <div class="hidden lg:block absolute top-0 left-0  bottom-0 w-1/2 bg-gold"></div>
      <div class="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 bg-gray"></div>
      <div class="relative container mx-auto">
        <div class="flex flex-col lg:items-center lg:flex-row">
          <div class="w-full mx-auto text-white bg-gold lg:bg-transparent">
            <div class="px-10 lg:px-16 xl:px-32 my-32">
              <h4 class="bg-text mb-8">Abonnez-vous à la newsletter</h4>
              <input
                class="mb-3 appearance-none w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Votre adresse email"
              >
              <button class="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6">
                OK
              </button>
            </div>

          </div>
          <div class="w-full mx-auto text-white bg-gray lg:bg-transparent">
            <div class="px-10 lg:px-16 xl:px-32 my-32">
              <nuxt-link
                to="/"
                class="inline-block"
              >
                <h4 class="bg-text mb-8">Évaluation immobilière</h4>
                <button class="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6">
                  En savoir plus
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Fullscreen :bgUrl="bgUrls[2]">
      <ArrowLink>
        <h4 class="bg-text">Trouver un bien<br> à louer</h4>
      </ArrowLink>

    </Fullscreen>

    <footer class="relative bg-gray py-8 md:py-10 text-white">

      <div class="flex flex-wrap container mx-auto uppercase">
        <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0">
          <div class="font-bold">BUREAU UCCLE</div>
          <div class="md:block">—</div>
          <p>Chaussée de Waterloo<br>1382 - 1180<br>Uccle</p>
          <div class="mt-5">
            <p>Vente: <span class="whitespace-no-wrap">+32 (0)2 375 10 00</span></p>
            <p>Location: <span class="whitespace-no-wrap">+32 (0)2 375 10 20</span></p>
            <p>Neuf: <span class="whitespace-no-wrap">+32 (0)2 375 10 10</span></p>
          </div>
        </div>
        <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0">
          <div class="font-bold">BUREAU WOLUWE</div>
          <div class="md:block">—</div>
          <p>Avenue de Tervueren<br>418 - 1150<br>Woluwe-St-Pierre</p>
          <div class="mt-5">
            <p>Vente: <span class="whitespace-no-wrap">+32 (0)2 772 15 30</span></p>
            <p>Location: <span class="whitespace-no-wrap">+32 (0)2 771 12 40</span></p>
            <p>Neuf: <span class="whitespace-no-wrap">+32 (0)2 777 15 10</span></p>
          </div>
        </div>
        <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0 ">
          <div class="font-bold">HORAIRES D'OUVERTURES</div>
          <div class="md:block">—</div>
          <p>lundi au vendredi:<br>9h&nbsp;—&nbsp;18h</p>
          <p>samedi:<br>10h&nbsp;—&nbsp;13h (à Uccle)</p>
        </div>
        <div class="w-full md:w-1/2 mb-12 lg:w-1/4 px-6 pt-8 border-t lg:border-t-0 border-light-grey lg:pt-0">
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
    </footer>
  </div>
</template>

<script>
import scrollCssMixin from "~/utils/scrollCssMixin.js";

export default {
  mixins: [scrollCssMixin],
  beforeMount() {
    window.addEventListener("scroll", this.scroll);
  },
  data: () => ({
    windowWidth: null,
    opacity: {
      startPos: null,
      endPos: null,
      startValue: 0.3,
      endValue: 0.7,
      currentValue: null,
    },
    bgUrls: [
      "https://www.victoire.be/sites/default/files/styles/hero/public/whise/3916713/86c34e464291430da2f7c376a3619ff4.jpg?itok=BvR6ZJhe",
      "https://www.victoire.be/sites/default/files/styles/hero/public/whise/3916713/5076a14513654178b51880b484f56d2b.jpg?itok=tt4q4Qon",
      "https://www.victoire.be/sites/default/files/styles/hero/public/whise/4072577/eb8fbd8d3da94fe7b3a1ab1754320541.jpg?itok=Bi6tLs_7",
    ],
  }),
  computed: {
    currentOpacity() {
      return this.opacity.currentValue || this.opacity.startValue;
    },
    realEstates() {
      return this.$store.getters.realEstateSales;
    },
    scrollItem() {
      return {
        y1: this.opacity.startPos,
        y2: this.opacity.endPos,
        //property: "--bg",
        from: this.opacity.startValue,
        to: this.opacity.endValue,
        currentPercent: 0,
        //suffix: null,
      };
    },
  },
  methods: {
    calcMastheadTextPos() {
      const mastheadTextEl = document.querySelector("#js-masthead-text");
      if (mastheadTextEl) {
        this.opacity.startPos =
          mastheadTextEl.getBoundingClientRect().top + window.scrollY;
        this.opacity.endPos =
          mastheadTextEl.getBoundingClientRect().bottom + window.scrollY;
      }
    },
    scroll() {
      if (this.windowWidth !== window.innerWidth) {
        this.calcMastheadTextPos();
        this.windowWidth = window.innerWidth;
      }

      const percent = this.percentage(
        this.scrollItem.y1,
        this.scrollItem.y2,
        window.scrollY
      );
      if (this.scrollItem.currentPercent !== percent) {
        this.scrollItem.currentPercent = percent;

        window.requestAnimationFrame(() => {
          const property = this.lerp(
            this.scrollItem.from,
            this.scrollItem.to,
            this.scrollItem.currentPercent
          );

          this.opacity.currentValue = property;

          // setting css less performant
          /*
          document.documentElement.style.setProperty(
            this.scrollItem.property,
            property + (this.scrollItem.suffix || null)
          );
          */
        });
      }
    },
  },
};
</script>

<style>
.link-arrow svg {
  transition: transform 200ms;
}

.link-arrow:hover svg {
  transform: translate(10px, 0);
}

/*
:root {
  --bg: 0.3;
}

.bg-overlay {
  opacity: var(--bg);
}
*/

#test {
  /* transform: scale(var(--bg)); */
}

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

.bg-text {
  font-size: 1.466rem;
  font-weight: 600;
  line-height: 1.1;
}

@screen lg {
  .lg\:bg-transparent-important {
    background-color: transparent !important;
  }
}

@screen md {
  .bg-text {
    font-size: 1.466rem;
  }

  .md\:column-count-2 {
    column-count: 2;
  }

  .md\:overlap-8vh {
    margin-top: -8vh;
  }
}

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

@screen lg {
  .bg-text {
    font-size: 2.8rem;
  }

  .overlap-1 {
    margin-top: -20vh;
  }

  .overlap-2 {
    margin-top: -30vh;
  }
}

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
