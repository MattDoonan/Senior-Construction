<script setup lang="ts">

</script>

<template>

  <section class="project-title">
    <h3>
      {{title}}
    </h3>
    <h2>
      {{description}}
    </h2>
    <NuxtImg :src="image" alt="main image"/>
  </section>

</template>

<script lang="ts">

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
  }
}

</script>