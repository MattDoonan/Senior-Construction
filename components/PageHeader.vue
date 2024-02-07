<script setup lang="ts">

</script>

<template>

  <section class="title">
    <h1>
      {{title}}
    </h1>
  </section>

</template>

<script lang="ts">

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}

</script>