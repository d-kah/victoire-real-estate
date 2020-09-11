<template>
  <div class="bg-white overflow-hidden">
    <div class="border-0 lg:border-b border-ebebeb">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <nuxt-link
          to="/"
          style="margin-left:36px;"
        >
          <img
            style="min-width:150%;position:relative;top: 8px;mix-blend-mode:multiply;"
            src="~/static/victoireLogo.jpg"
          />
        </nuxt-link>
        <div style="display:flex;margin-right:3rem;font-weight:500;font-size:1.0625rem;">
          <span style="margin-right:1.5rem;">Contact</span>
          <span>FR</span>
        </div>

        <!--
        <v-btn style="margin-right:3rem;" large color="primary">contactez nous</v-btn>
        -->
        <!--
        <div style="padding-right:3rem;position:relative;">
          <span style="width: 25px;height:2px;background-color:#262626;display:block;margin:6px auto;"></span>
          <span style="width: 25px;height:2px;background-color:#262626;display:block;margin:6px auto;"></span>
          <span style="width: 25px;height:2px;background-color:#262626;display:block;margin:6px auto;"></span>
        </div>
        -->
      </div>
    </div>

    <div class="hidden lg:block">
      <div
        class="flex"
        style="padding-top:2rem;padding-bottom:3rem;background:white;"
      >
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
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      {
        title: "vente",
        to: "vente",
        amount: 92,
      },
      {
        title: "immobilier neuf",
        to: "immobilierneuf",
        amount: 68,
      },
      {
        title: "location",
        to: "location",
        amount: 53,
      },
      {
        title: "residence service",
        to: "residenceservice",
        amount: 20,
      },
      /*
      {
        title: "evaluez votre bien",
        to: "evaluezvotrebien",
      },
      */
    ],
  }),
};
</script>

<style>
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

@screen md {
  .nav__links > a:hover > span {
    border-bottom: 1px solid #cd4749;
  }
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
</style>