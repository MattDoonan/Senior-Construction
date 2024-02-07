<script setup lang="ts">

</script>

<template>
  <article class="person left-row">
    <NuxtImg :src="item.image"/>
    <div class="left-col">
      <h3>
        {{item.name}}
      </h3>
      <h5 class="grey">
        {{item.title}}
      </h5>
      <h5 :class="{'active' : viewMore}" ref="text">
        {{item.info}}
      </h5>
      <button @click="clickButton" v-if="showButton">
        {{viewMore ? 'Read Less -' : 'Read More +'}}
      </button>
    </div>
  </article>
  <hr>
</template>

<script lang="ts">

import type {person} from "~/typescript/types";

export default {
  props: {
    item: {
      type: Object as () => person,
      required: true
    }
  },
  data() {
    return {
      viewMore: false,
      showButton: false,
    }
  },
  mounted() {
    this.ifSize();
  },
  methods: {
    ifSize()  {
      const text = this.$refs.text;
      if (text) {
        this.showButton = text.clientHeight >= 88;
      } else {
        this.showButton = false
      }
    },
    clickButton() {
      this.viewMore = !this.viewMore;
    }
  }
}


</script>