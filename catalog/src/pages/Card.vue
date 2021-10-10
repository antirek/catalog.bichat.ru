<template>
  <q-page class="flex justify-center">
    <div class="full-width row  justify-center q-pa-md">  
      <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="75px">
            <img :src="card.img">
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
          <q-route-tab name="mails" label="Info" :to="'/card/' + card.name" />
          <q-route-tab name="chat" label="Chat" :to="'/chat/' + card.name" />
          
        </q-tabs>
      <q-separator />

      <q-card-section horizontal>
        

        
      </q-card-section>
    </q-card>


    
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

const cards = [
  {
    name: 'mvideo',
    img: 'https://cms.mvideo.ru/magnoliaPublic/dam/jcr:3c0c7e7e-d07f-4ecd-aa6d-6c4d11cda8f7',
    header: 'С нами удобно!',
    description: '',
  },
  {
    name: 'kvantorium',
    img: 'https://kvantorium24.ru/wp-content/uploads/2018/08/kvant-logo.png',
    header: '',
    description: '«Кванториум» – уникальная среда для ускоренного развития ребёнка по актуальным научно-исследовательским и инженерно-техническим направлениям',
  },
  {
    name: 'zhkh',
    img: 'http://corpmedia.ru/images/cache/320x200/00/20/8194.jpg',
    header: '',
    description: 'Мы проводим текущие ремонты, обеспечиваем содержание и обслуживание более 2000 многоквартирных домов – это более 9 000 000 м2 жилищного фонда Красноярска.',
  },
  {
    name: 'rest',
    img: 'https://xn--80aaa5anh3am3g.xn--p1ai/bitrix/templates/mohito/img/altamira2.png',
    header: '',
    description: `Активный отдых в Сибири:<br/>
            - сплавы по рекам,<br/>
            - путешествия и отдых в горах,<br/>
            - экскурсии в пещеры`,
  }
];

export default defineComponent({
  name: 'Card',
  data: function () {
    return { 
      tab: 'info',
    };
  },
  methods: {
    getCard: function (id) {      
      const card = cards.find(card => card.name === id);
      return card;
    },
  },
  computed: {
    card: function () {
      console.log(this.$route.params.id);
      return this.getCard(this.$route.params.id)
    },
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