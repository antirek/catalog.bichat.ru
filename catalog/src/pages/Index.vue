<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md" v-if="cards">
      <div v-for="(card, index) in cards" :key="index" >
        <q-card class="my-card">
          <router-link :to="'/card/' + card.name">
            <img :src="card.logoUrl" style="padding:30px">
          </router-link>
          <q-card-section>
            
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-card-section class="q-pt-none">            
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat round color="red" icon="message" :to="'/chat/' + card.name" />
            <q-btn flat round color="teal" icon="phone" />
            <q-btn flat round color="grey" icon="favorite" />
          </q-card-actions>
        </q-card>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { Company } from '../api/api';

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      cards: null,
    };
  },
  methods: {
    loadCompanies: async function () {
      const {data} = await Company.get();
      console.log('companies', data);
      this.cards = data;
    },
  },
  created () {
    this.loadCompanies();
  },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  min-height: 400px
</style>