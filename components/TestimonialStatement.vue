<script setup lang="ts">

</script>

<template>
  <article class="statement space-between-row">
    <div class="left-col">
      <h3>
        {{item.name}}
      </h3>
      <h5>
        {{item.title}}
      </h5>
    </div>
    <div class="left-col">
      <NuxtImg src="/BasicImages/quotes.png"/>
      <h4>
        {{item.info}}
      </h4>
    </div>
  </article>
  <hr>
</template>

<script lang="ts">
import type {quotes} from "~/typescript/types";

export default {
  props: {
    item: {
      type: Object as () => quotes,
      required: true
    }
  },
}
</script>