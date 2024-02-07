<script setup lang="ts">

import type {quotes} from "~/typescript/types";
import TestimonialStatement from "~/components/TestimonialStatement.vue";

const peoplesQuotes:quotes[] = [
  {
    name: 'Walter Stewart',
    title: 'Westmere New Build',
    info: 'Probabo, inquit, sic agam, ut enim inter argumentum conclusionemque rationis et caritatem, quae ab eo est consecutus? laudem et dolorem aspernari ut alterum aspernandum sentiamus alii autem, quibus ego soluta nobis est eligendi optio, cumque nihil est, qui blanditiis praesentium voluptatum deleniti atque in.',
  },
  {
    name: 'Amy Hall',
    title: 'Birkenhead Renovation',
    info: 'Sunt autem nusquam hoc epicurus in sanguinem suum tam crudelis fuisse, nihil oportere exquisitis rationibus confirmare, tantum satis esse expetendam et aperta iudicari ea voluptate et aut in sanguinem suum tam crudelis fuisse, nihil est, quid et dolore disputandum putant sed ut earum rerum necessitatibus.\n\n' +
        'Quid ex ea voluptate velit esse, quid malum, sensu iudicari, sed quia dolor sit aut interrogari ut placet, inquam tum dicere exorsus est cur nec in culpa, qui haec putat, ut de commodis suis cogitarent.',
  },
  {
    name: 'Walter Stewart',
    title: 'Westmere New Build',
    info: 'Probabo, inquit, sic agam, ut enim inter argumentum conclusionemque rationis et caritatem, quae ab eo est consecutus? laudem et dolorem aspernari ut alterum aspernandum sentiamus alii autem, quibus ego soluta nobis est eligendi optio, cumque nihil est, qui blanditiis praesentium voluptatum deleniti atque in.',
  },
]
</script>

<template>
  <PageHeader title="Testimonials"/>
  <section class="testimonials">
    <TestimonialStatement v-for="(person, key) in peoplesQuotes" :key="key" :item="person"/>
  </section>
</template>

<style scoped>

</style>