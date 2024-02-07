<template>
  <article class="project">
    <div class="img-container" :class="{'tall' : project.isTall}">
      <div class="over-image large-item">
        <NuxtLink :to="'/projects/'+project.title" class="large">
          View Project
        </NuxtLink>
      </div>
      <NuxtImg :class="{'tall' : project.isTall}" :src="project.image" :alt="project.title + ' image'"/>
    </div>
    <h4>
      {{project.title}}
    </h4>
    <h3>
      {{project.description}}
    </h3>
    <NuxtLink :to="'/projects/'+project.title" class="large underline small-item">
      View Project
    </NuxtLink>
  </article>
</template>

<script lang="ts">

import type {featuredProject} from "~/typescript/types";

export default {
  props: {
    project: {
      type: Object as () => featuredProject,
      required: true,
    }
  }
}

</script>