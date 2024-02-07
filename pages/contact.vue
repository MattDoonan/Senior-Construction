<script setup lang="ts">

</script>

<template>
  <PageHeader title="Contact"/>
  <section class="contact">
    <div class="left-col container">
      <h5>
        Boyd Senior
      </h5>
      <h3>
        {{'bsenior@seniorconstruction.co.nz \n+64 21 979 616'}}
      </h3>
      <h5>
        Office
      </h5>
      <h3>
        {{'office@seniorconstruction.co.nz \n+64 9 444 6630'}}
      </h3>
      <h5>
        Location
      </h5>
      <h3>
        {{'65 Hillside Road \nWairau Valley \nAuckland 0627'}}
      </h3>
    </div>
    <form class="left-col">
      <h5>
        Send us a message and we’ll get back to you as soon as possible
      </h5>
      <div class="contact-fields">
        <div class="left-col">
          <label>
            First Name
          </label>
          <input required type="text"/>
        </div>
        <div class="left-col">
          <label>
            First Name
          </label>
          <input required type="text"/>
        </div>
        <div class="left-col">
          <label>
            Email Address
          </label>
          <input required type="email"/>
        </div>
        <div class="left-col">
          <label>
            Phone Number
          </label>
          <input type="text"/>
        </div>
      </div>
      <div class="left-col">
        <label>
          Message
        </label>
        <textarea required/>
      </div>
      <button>
        Submit
      </button>
    </form>
  </section>
  <section class="map">
    <NuxtImg class="large-item" src="/BasicImages/map.png"/>
    <NuxtImg class="small-item" src="/BasicImages/mapSmall.png"/>
  </section>
</template>

<style scoped>

</style>