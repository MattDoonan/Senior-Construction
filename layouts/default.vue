<script setup lang="ts">

import AppNavigation from "~/components/defaultComponents/AppNavigation.vue";
import AppFooter from "~/components/defaultComponents/AppFooter.vue";

</script>

<template>
  <AppNavigation/>
  <main role="main">
    <slot/>
  </main>
  <AppFooter/>
</template>
