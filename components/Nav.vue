<template>
  <div class="overflow-hidden">
    <div class="z-30 relative top-0 left-0 right-0 bg-white">
      <div class="border-b border-ebebeb">
        <div class="flex justify-between items-center px-4">
          <nuxt-link to="/">
            <img
              class="logo relative"
              src="~/static/victoireLogo.jpg"
            />
          </nuxt-link>

          <div class="hidden lg:flex items-center">
            <div class="flex items-center font-medium">
              <nuxt-link
                to="/"
                class="mr-4"
              >
                <button class="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6">
                  Contact
                </button>
              </nuxt-link>
              |
              <nuxt-link to="/">
                <span class="nav__item m-4 p-1">FR</span>
              </nuxt-link>
            </div>
          </div>

          <div
            @click="toggleNav"
            class="lg:hidden cursor-pointer p-4"
          >
            <div
              id="nav-icon4"
              class="px-3 h-5"
              :class="{'open':showNav}"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:block">
        <div class="flex pt-8 pb-12">
          <div
            class="flex w-1/4 nav__links"
            v-for="n in navLinks"
            :key="n.title"
          >
            <nuxt-link :to="`/${n.to}`">
              <div>{{n.amount}}</div>
              <span>{{n.title}}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showNav"
      class="nav-mobile flex flex-col lg:hidden"
    >
      <div class="overflow-y-auto fixed z-20 top-0 left-0 right-0 bottom-0 bg-white">
        <div class="flex flex-col min-h-full capitalize px-8 pt-24 pb-10 py-8">
          <div class="py-6">
            <div style="font-size:1.2em;">Choisissez votre langue</div>
            <div>–</div>
            <ul class="flex">
              <li
                v-for="l in languages"
                :key="l"
                class="flex mr-6 opacity-50"
                :class="{'opacity-100 border-b-primary': l === languageActive}"
                style="font-size:2em;"
              >{{l}}</li>
            </ul>
          </div>

          <ul class="py-6 flex-grow">
            <div style="font-size:1.2em;">Biens immobiliers</div>
            <div>–</div>
            <li
              v-for="n in navLinks"
              :key="n.title"
              class="py-2"
            >
              <nuxt-link
                :to="`/${n.to}`"
                class="flex "
                style="font-size:2em;"
              >
                <div class="mr-6">{{n.amount}}</div>
                <span>{{n.title}}</span>
              </nuxt-link>
            </li>
          </ul>

          <button class="bg-primary hover:bg-red-700 text-white font-bold py-5">
            Contact
          </button>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import tailwindConfig from "~/tailwind.config.js";

export default {
  beforeMount() {
    const lgBreakpoint = parseInt(tailwindConfig.theme.screens.lg, 10);

    window.addEventListener("resize", () => {
      if (window.innerWidth >= lgBreakpoint) {
        document.body.style.overflow = "auto";
        return;
      } else if (this.showNav) {
        document.body.style.overflow = "hidden";
      }
    });
  },
  data: () => ({
    languages: ["EN", "FR", "NL"],
    languageActive: "FR",
    showNav: false,
    navLinks: [
      {
        title: "vente",
        to: "#",
        amount: 92,
      },
      {
        title: "immobilier neuf",
        to: "#",
        amount: 68,
      },
      {
        title: "location",
        to: "#",
        amount: 53,
      },
      {
        title: "residence service",
        to: "#",
        amount: 20,
      },
    ],
  }),

  methods: {
    toggleNav() {
      this.showNav = !this.showNav;

      if (this.showNav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style>
.nav-mobile {
  font-size: 0.8rem;
}

.nav__item:hover {
  border-bottom: 1px solid #cd4749;
  cursor: pointer;
}

.border-b-primary {
  border-bottom: 1px solid #cd4749;
}

.nav__links > a {
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 500;
  padding-left: 2rem;
  color: #262626 !important;
  text-decoration: none;
  display: inline-block;
}

.nav__links > a:hover > span {
  border-bottom: 1px solid #cd4749;
}

.nav__links > div {
  font-weight: 500;
  letter-spacing: 0.05em;
  font-size: 5;
}

.nav__links > span {
  padding-top: 0.333rem;
  line-height: 1;
}

.border-ebebeb {
  border-color: #ebebeb;
}

.logo {
  min-width: 100%;
  top: 4px;
  mix-blend-mode: multiply;
}

@screen md {
  .nav__links > a:hover > span {
    border-bottom: 1px solid #cd4749;
  }
}

#nav-icon4 {
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
}

#nav-icon4 span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #262626;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.2s ease-in-out;
}

#nav-icon4 span:nth-child(1) {
  top: 0px;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 8px;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 16px;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 0px;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 17px;
  left: 0px;
}
</style>