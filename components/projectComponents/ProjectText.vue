<script setup lang="ts">

</script>

<template>

  <section class="project-text">
    <h5 class="content">
      {{content}}
    </h5>
    <ul>
      <li>
        <h5>
          Architect
        </h5>
        <h4>
          {{architect}}
        </h4>
      </li>
      <li>
        <h5>
          Completion Date
        </h5>
        <h4>
          {{completionDate}}
        </h4>
      </li>
      <li>
        <h5>
          Location
        </h5>
        <h4>
          {{location}}
        </h4>
      </li>
      <li>
        <h5>
          Photography
        </h5>
        <h4>
          {{photography}}
        </h4>
      </li>
    </ul>
  </section>

</template>

<script lang="ts">

export default {
  props: {
    content: {
      required: true,
      type: String,
    },
    architect: {
      required: true,
      type: String,
    },
    completionDate: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
    photography: {
      required: true,
      type: String,
    },
  }
}

</script>