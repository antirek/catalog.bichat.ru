<template>
  <q-page class="flex justify-center">
    <div class="full-width row  justify-center q-pa-md">  
      <q-card class="my-card" flat bordered v-if="card">
      <q-item>
        <q-item-section avatar>
          <q-avatar size="75px">
            <img :src="card.logoUrl">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{card.name}}</q-item-label>
          <q-item-label caption>
            {{card.header}}
          </q-item-label>
          
        </q-item-section>
        <q-item-section side>
          
        </q-item-section>
      </q-item>

        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3"
          align="left"
          narrow-indicator
        >
          <q-route-tab name="mails" label="Info" :to="'/card/'+card.name"/>
          <q-route-tab name="chat" label="Chat" :to="'/chat/'+card.name"/>
          
        </q-tabs>
      <q-separator />

      <q-card-section horizontal>
        <q-card-section class="full-width">
          <div class="q-pa-md row justify-center">
            <div style="width: 100%;">
              <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                :text="['hey, how are you?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
              />
              <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['doing fine, how r you?']"
                stamp="4 minutes ago"
                text-color="white"
                bg-color="primary"
              />
              <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                :text="['hey, how are you?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
              />
              <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['doing fine, how r you?']"
                stamp="4 minutes ago"
                text-color="white"
                bg-color="primary"
              />
            </div>
          </div>
        </q-card-section>

        
      </q-card-section>
    </q-card>


    
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { Company } from '../api/api';

export default defineComponent({
  name: 'Card',
  data () {
    return {
      companies: null,
      tab: null,
    };
  },
  methods: {
    getCard: function (id) {  
      let card;      
      if (this.companies && this.companies.length > 0) {
        card = this.companies.find(card => card.name === id);
      } 
      return card;
    },
    loadCompanies: async function () {
      const {data} = await Company.get();
      // console.log('companies', data);
      this.companies = data;
    },
  },
  computed: {
    card: function () {
      // console.log(this.$route.params.id);
      return this.getCard(this.$route.params.id)
    },
  },
  mounted () {
    this.loadCompanies();
  },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 650px
  min-widht: 650px
  min-height: 400px
</style>