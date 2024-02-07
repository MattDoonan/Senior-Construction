<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import Project from "~/components/homeComponents/Project.vue";
import type {featuredProject} from "~/typescript/types";


const projects:featuredProject[] = [
  {
    title: 'Third Ave',
    description: 'The Best of Modern Flair Meets Kingsland Bungalow',
    image: '/ProjectImages/project3.jpg',
    type: 'Renovation',
    isTall: false,
  },
  {
    title: 'Westmere',
    description: 'A Collaborative Journey: Our Debut Project with Prominent Auckland Architects DAA',
    image: '/ProjectImages/project7.jpg',
    type: 'New Build',
    isTall: false,
  },
  {
    title: 'Palmerston',
    description: 'Nature\'s City Retreat: Elegance, Engineering, and Urban Serenity',
    image: '/ProjectImages/project6.jpg',
    type: 'New Build',
    isTall: false,
  },
]

</script>

<template>

  <section class="home-projects">

    <div class="left-col">
      <div class="space-between-row">
        <h2>
          Featured Project
        </h2>
        <div class="right-row large-item">
          <button @click="clickLeft">
            <NuxtImg :src="leftActive ? '/SVG/leftActive.svg' : '/SVG/leftDisabled.svg'"/>
          </button>
          <button @click="clickRight">
            <NuxtImg :src="rightActive ? '/SVG/rightActive.svg' : '/SVG/rightDisabled.svg'"/>
          </button>
        </div>
      </div>
      <div class="small-item">
        <Project
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
        />
      </div>
      <Swiper
          :slides-per-view="'auto'"
          :modules="[Navigation]"
          :space-between="40"
          :allowTouchMove="false"
          class="swiper large-item"
          :navigation="{
            enabled: true,
            nextEl: '.nextSlide',
            prevEl: '.prevSlide'
          }"
      >

        <span ref="nextSlide" class="nextSlide"></span>
        <span ref="prevSlide" class="prevSlide"></span>
        <SwiperSlide
            v-for="(project, index) in projects"
            :key="index"
            class="slide"
        >
          <Project :project="project"/>
        </SwiperSlide>
      </Swiper>
    </div>

  </section>

</template>

<script lang="ts">

export default {
  data() {
    return {
      rightActive: true,
      leftActive: false,
    }
  },
  methods: {
    clickLeft() {
      this.$refs.prevSlide.click()
      this.checkBtn()
    },
    clickRight() {
      this.$refs.nextSlide.click()
      this.checkBtn()
    },
    checkBtn() {
      const nextSlideRef = this.$refs.nextSlide as HTMLElement;
      this.rightActive = !(nextSlideRef && nextSlideRef.classList.contains('swiper-button-disabled'));
      const prevSlideRef = this.$refs.prevSlide as HTMLElement;
      this.leftActive = !(prevSlideRef && prevSlideRef.classList.contains('swiper-button-disabled'));
    }
  }
}

</script>