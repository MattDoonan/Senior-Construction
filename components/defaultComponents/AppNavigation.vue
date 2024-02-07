<script setup lang="ts">

import type {navLink} from "~/typescript/types";

const links1:navLink[] = [
  {
    pageName: 'Projects',
    link: '/projects'
  },
  {
    pageName: 'Our People',
    link: '/our-people'
  },
  {
    pageName: 'What-We-Do',
    link: '/what-we-do'
  },
  {
    pageName: 'Accolades',
    link: '/accolades'
  },
]

const links2:navLink[] = [
  {
    pageName: 'Community',
    link: '/community'
  },
  {
    pageName: 'Testimonials',
    link: '/testimonials'
  },
  {
    pageName: 'About',
    link: '/about'
  },
  {
    pageName: 'Contact',
    link: '/contact'
  },
]

</script>

<template>
  <header :class="{'black' : blackNav}">
    <div class="container">
      <NuxtLink to="/">
        <NuxtImg :src="blackLogo ? '/BasicImages/blackLogo.png' : '/BasicImages/whiteLogo.png'" alt="logo"/>
      </NuxtLink>
      <button :class="{'active': dropDownActive}" @click="toggleDropDown">
      <span :class="{'active' : dropDownActive}">
        Close
      </span>
        <span :class="{'active' : !dropDownActive}">
        Menu
      </span>
      </button>
      <NuxtLink to="tel:0272956628" class="large large-item">
        +64 21 979 616
      </NuxtLink>
    </div>
  </header>
  <section class="popout center-all" :class="{'active': dropDownActive}">
    <nav>
      <ul>
        <li v-for="link in links1">
          <NuxtLink :to="link.link">
            {{link.pageName}}
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li v-for="link in links2">
          <NuxtLink :to="link.link">
            {{link.pageName}}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">

export default {
  data() {
    return {
      blackNav:  this.$route.path !== '/',
      blackLogo: this.$route.path !== '/',
      dropDownActive: false,
    }
  },
  methods: {
    toggleDropDown() {
      this.dropDownActive = !this.dropDownActive
      if (this.dropDownActive) {
        this.blackNav = true;
        this.blackLogo = true;
      } else {
        this.blackNav = this.$route.path !== '/'
        if (this.$route.path === '/') {
          setTimeout(() => {
            this.blackLogo = false;
          }, 400);
        }
      }
    }
  },
  watch: {
    '$route' (to) {
      this.blackNav = to.path != '/';
      this.blackLogo = to.path != '/';
      this.dropDownActive = false;
    },
  },
}

</script>