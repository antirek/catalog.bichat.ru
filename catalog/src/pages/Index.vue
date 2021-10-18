<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <div v-for="(card, index) in cards" :key="index">
        <q-card class="my-card">
          <router-link :to="'/card/' + card.name">
            <img :src="card.img" style="padding:30px">
          </router-link>
          <q-card-section>
            <div class="text-h6">{{card.header}}</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{card.description}}
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


const cards = [
  {
    name: 'mvideo',
    logoUrl: 'https://cms.mvideo.ru/magnoliaPublic/dam/jcr:3c0c7e7e-d07f-4ecd-aa6d-6c4d11cda8f7',
    header: 'С нами удобно!',
    description: '',
  },
  {
    name: 'kvantorium', logoUrl: 'https://kvantorium24.ru/wp-content/uploads/2018/08/kvant-logo.png',
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
]

export default defineComponent({
  name: 'PageIndex',
  data: function () {
    return {
      cards,
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  min-height: 400px
</style>