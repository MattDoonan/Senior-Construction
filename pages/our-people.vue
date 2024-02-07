<script setup lang="ts">

import PageHeader from "~/components/PageHeader.vue";
import type {person} from "~/typescript/types";

const team:person[] = [
  {
    name: 'Mark Smith',
    title: 'Business Title',
    image: '/OurPeopleImages/person1.jpg',
    info: 'Primum igitur inquit sic agam, ut enim inter mediocrem animadversionem atque haec subtilius velint tradere et quasi involuta aperiri, altera occulta quaedam et benivole collegisti, nec voluptas assumenda est, quid malum, sensu iudicari, sed et quas lorem ipsum excepturi sint, obcaecati cupiditate non intellegamus, tu tam. Epicurus in culpa, qui officia deserunt mollitia animi, id omnia torquem detraxit hosti et quidem se esse admonere interesse enim ad nature \n\nPrimum igitur inquit sic agam, ut enim inter mediocrem animadversionem atque haec subtilius velint tradere et quasi involuta aperiri, altera occulta quaedam et benivole collegisti, nec voluptas assumenda est, quid malum, sensu iudicari, sed et quas lorem ipsum excepturi sint, obcaecati cupiditate non intellegamus, tu tam. Epicurus in culpa, qui officia deserunt mollitia animi, id omnia torquem detraxit hosti et quidem se esse admonere interesse enim ad nature',
  },
  {
    name: 'Eric Anderson',
    title: 'Business Title',
    image: '/OurPeopleImages/person2.jpg',
    info: 'Torquem detraxit hosti et quidem se esse admonere interesse enim ad naturam aut petat aut quid bonum sit extremum et harum quidem faciunt, ut perspiciatis, unde omnis voluptas nulla pariatur at vero eos censes tantas res gessisse sine causa, nollem me tamen laudandis maioribus meis.',
  },
  {
    name: 'Jesse Stewart',
    title: 'Business Title',
    image: '/OurPeopleImages/person3.jpg',
    info: 'Primum igitur inquit sic agam, ut enim inter mediocrem animadversionem atque haec subtilius velint tradere et quasi involuta aperiri, altera occulta quaedam et benivole collegisti, nec voluptas assumenda est, quid malum, sensu iudicari, sed et quas lorem ipsum excepturi sint, obcaecati cupiditate non intellegamus, tu tam. Epicurus in culpa, qui officia deserunt mollitia animi, id omnia torquem detraxit hosti et quidem se esse admonere interesse enim ad nature \n\nPrimum igitur inquit sic agam, ut enim inter mediocrem animadversionem atque haec subtilius velint tradere et quasi involuta aperiri, altera occulta quaedam et benivole collegisti, nec voluptas assumenda est, quid malum, sensu iudicari, sed et quas lorem ipsum excepturi sint, obcaecati cupiditate non intellegamus, tu tam. Epicurus in culpa, qui officia deserunt mollitia animi, id omnia torquem detraxit hosti et quidem se esse admonere interesse enim ad nature',
  },
]



</script>

<template>
  <PageHeader title="Our People"/>
  <section class="our-people">
    <Person :item="person" v-for="(person,key) in team" :key="key"/>
  </section>

</template>

<style scoped>

</style>