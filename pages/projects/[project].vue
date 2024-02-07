<script setup lang="ts">

import type {project} from "~/typescript/types";
import ProjectTitle from "~/components/projectComponents/ProjectTitle.vue";
import ProjectText from "~/components/projectComponents/ProjectText.vue";
import {ref} from 'vue';

const route = useRoute()
const page = route.params.project

if (!page) {
  throw createError ({
    statusMessage: 'Page Not Found',
    statusCode: 404
  })
}

let content:project =
{
  title: 'Westmere',
  description: 'A Collaborative Journey: Our Debut Project with Prominent Auckland Architects DAA',
  mainImage: '/ProjectImages/projectLarge.jpg',
  content:
      'We were fortunate enough to be asked to tender this project after previous clients recommended us to these clients.\n\n' +
      'After a tender evaluation period we were invited to negotiate with the client and architect to agree on an achievable budget; by offering our opinion and having open discussions on the build this was achieved and the process began.\n\n' +
      'This was our first project with well-known Auckland architects DAA and it was a great ride; these guys know their stuff and it was enjoyable to work out the finer details with Tim.\n\n' +
      'Ultimately we enjoyed the process; had some fun on the way, produced a fantastic house and now have several other projects we are working with DAA on.\n\n' +
      'The house made the front cover of Vivo magazine and is up for a few awards; we don’t build to receive awards, we build to satisfy clients….but an award or two is certainly nice!',
  architect: 'DAA Architects',
  completionDate: 'Jun 2021',
  location: 'Westmere, Auckland',
  photographer: 'Markus Smith',
  imageSets: [
    {
      image1: '/ProjectImages/projectPage1.jpg',
      image2: '/ProjectImages/projectPage2.jpg',
      image3: '/ProjectImages/projectPage3.jpg',
    },
    {
      image1: '/ProjectImages/projectPage4.jpg',
      image2: '/ProjectImages/projectPage5.jpg',
      image3: '/ProjectImages/projectPage6.jpg',
    },
  ]
}

const leftActive = ref(false)
const rightActive = ref(true)

const clickLeft = () => {

}

const clickRight = () => {

}

</script>

<template>
  <ProjectTitle :title="content.title" :image="content.mainImage" :description="content.description"/>
  <ProjectText :content="content.content" :photography="content.photographer" :location="content.location" :completion-date="content.completionDate" :architect="content.architect"/>
  <section class="project-images" v-for="(images, key) in content.imageSets" :key="key">
    <div class="center-top-row">
      <NuxtImg :src="images.image1" alt="image 1"/>
      <NuxtImg :src="images.image2" alt="image 1"/>
    </div>
    <NuxtImg class="wide" :src="images.image3" alt="image 1"/>
  </section>
  <section class="project-navigation">
    <div class="space-between-row">
      <div class="left-row">
        <button @click="clickLeft">
          <NuxtImg :src="leftActive ? '/SVG/leftActive.svg' : '/SVG/leftDisabled.svg'"/>
        </button>
        <h3 class="large-item" :class="{'active' : leftActive}">
          Previous Project
        </h3>
      </div>
      <div class="right-row">
        <h3 class="large-item" :class="{'active' : rightActive}">
          Next Project
        </h3>
        <button @click="clickRight">
          <NuxtImg :src="rightActive ? '/SVG/rightActive.svg' : '/SVG/rightDisabled.svg'"/>
        </button>
      </div>
    </div>
  </section>
</template>