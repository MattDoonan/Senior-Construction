<script setup lang="ts">

import PageHeader from "~/components/PageHeader.vue";
import Project from "~/components/homeComponents/Project.vue";
import type {featuredProject} from "~/typescript/types";
import {ref} from 'vue'

let projects:featuredProject[] = [
  {
    title: 'Westmere',
    description: 'A Collaborative Journey: Our Debut Project with Prominent Auckland Architects DAA',
    image: '/ProjectImages/project1.jpg',
    type: 'Renovations',
    isTall: true,
  },
  {
    title: 'Churchill',
    description: 'A Magnificent House on the Cliff Edge at Murray\'s Bay',
    image: '/ProjectImages/project2.jpg',
    type: 'New Builds',
    isTall: false,
  },
  {
    title: 'Third Ave',
    description: 'The Best of Modern Flair Meets Kingsland Bungalow',
    image: '/ProjectImages/project3.jpg',
    type: 'Renovations',
    isTall: false,
  },
  {
    title: 'Fife Street',
    description: 'The Ultimate Contemporary Home – Both an Oasis in the City and a Place to Relax.',
    image: '/ProjectImages/project4.jpg',
    type: 'Renovations',
    isTall: true,
  },
  {
    title: 'Birkenhead',
    description: 'Northcote Point Luxury Home with Harbour and City Views',
    image: '/ProjectImages/project5.jpg',
    type: 'New Builds',
    isTall: true,
  },
  {
    title: 'Palmerston',
    description: 'Nature\'s City Retreat: Elegance, Engineering, and Urban Serenity',
    image: '/ProjectImages/project6.jpg',
    type: 'Renovations',
    isTall: false,
  },
]

const filters = [
    'All Projects',
    'Renovations',
    'New Builds'
]

const activeFilter = ref('All Projects')

const changeFilter = (filter:string) => {
  activeFilter.value = filter;
}

</script>

<template>
  <PageHeader title="Projects"/>
  <section class="projects-content">
    <div class="left-row">
      <button :class="{'active' : filter === activeFilter}" v-for="(filter, index) in filters" @click="changeFilter(filter)" :key="index">
        {{filter}}
      </button>
    </div>
    <div class="container">
      <div class="left-col">
        <Project class="large-item" v-for="(item, index) in projects.filter((item, index) => index % 2 === 0 && (activeFilter === item.type || activeFilter === 'All Projects'))" :key="index" :project="item"/>
        <Project class="small-item" v-for="(item, index) in projects.filter((item, index) => activeFilter === item.type || activeFilter === 'All Projects')" :key="index" :project="item"/>
      </div>
      <div class="right-col large-item">
        <Project v-for="(item, index) in projects.filter((item, index) => index % 2 !== 0 && (activeFilter === item.type || activeFilter === 'All Projects'))" :key="index" :project="item"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>