<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cms.mvideo.ru/magnoliaPublic/dam/jcr:3c0c7e7e-d07f-4ecd-aa6d-6c4d11cda8f7" style="padding:30px">

        <q-card-section>
          <div class="text-h6">С нами удобно!</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat round color="red" icon="message" />
          <q-btn flat round color="teal" icon="phone" />
          <q-btn flat round color="grey" icon="favorite" />
        </q-card-actions>
      </q-card>

        <q-card class="my-card">
        <img src="https://kvantorium24.ru/wp-content/uploads/2018/08/kvant-logo.png" style="padding:30px">

        <q-card-section>
          <div class="text-h6"></div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          «Кванториум» – уникальная среда для ускоренного развития ребёнка по актуальным научно-исследовательским и инженерно-техническим направлениям
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat round color="red" icon="message" />
          <q-btn flat round color="teal" icon="phone" />
          <q-btn flat round color="grey" icon="favorite" />
        </q-card-actions>
      </q-card>

        <q-card class="my-card">
        <img src="http://corpmedia.ru/images/cache/320x200/00/20/8194.jpg" style="padding:30px">

        <q-card-section>
          <div class="text-h6"></div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Мы проводим текущие ремонты, обеспечиваем содержание и обслуживание более 2000 многоквартирных домов – это более 9 000 000 м2 жилищного фонда Красноярска.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat round color="red" icon="message" />
          <q-btn flat round color="teal" icon="phone" />
          <q-btn flat round color="grey" icon="favorite" />
        </q-card-actions>
        </q-card>

        <q-card class="my-card">
        <img src="https://xn--80aaa5anh3am3g.xn--p1ai/bitrix/templates/mohito/img/altamira2.png" style="padding:30px">

        <q-card-section>
          <div class="text-h6"></div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Активный отдых в Сибири:<br/>
            - сплавы по рекам,<br/>
            - путешествия и отдых в горах,<br/>
            - экскурсии в пещеры
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat round color="red" icon="message" />
          <q-btn flat round color="teal" icon="phone" />
          <q-btn flat round color="grey" icon="favorite" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  min-height: 400px
</style>