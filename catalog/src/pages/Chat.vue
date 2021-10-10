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
  },
];

export default defineComponent({
  name: 'Card',
  data: function () {
          return {
            tab: 'chat',
            visible: true,
            participants: [
                {
                    name: 'Arnaldo',
                    id: 1,
                    profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg'
                },
                {
                    name: 'José',
                    id: 2,
                    profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg'
                }
            ],
            myself: {
                name: 'Matheus S.',
                id: 3,
                profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg'
            },
            messages: [
                {
                    content: 'received messages',
                    myself: false,
                    participantId: 1,
                    timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'sent messages',
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'other received messages',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                }
            ],
            chatTitle: 'My chat title',
            placeholder: 'send your message',
            colors: {
                header: {
                    bg: '#d30303',
                    text: '#fff'
                },
                message: {
                    myself: {
                        bg: '#fff',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#fb4141',
                        text: '#fff'
                    },
                    messagesDisplay: {
                        bg: '#f7f3f3'
                    }
                },
                submitIcon: '#b91010',
                submitImageIcon: '#b91010',
            },
            borderStyle: {
                topLeft: "10px",
                topRight: "10px",
                bottomLeft: "10px",
                bottomRight: "10px",
            },
            hideCloseButton: false,
            submitIconSize: 25,
            closeButtonIconSize: "20px",
            asyncMode: false,
            toLoad: [
                {
                    content: 'Hey, John Doe! How are you today?',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
                {
                    content: "Hey, Adam! I'm feeling really fine this evening.",
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2010, month: 0, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
            ],
            scrollBottom: {
                messageSent: true,
                messageReceived: false
            },
            displayHeader:true,
            profilePictureConfig: {
                others: true,
                myself: true,
                styles: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                }
            },
            timestampConfig: {   
                format: 'HH:mm',
                relative: false
            },
            // there are other options, you can check them here
            // https://soapbox.github.io/linkifyjs/docs/options.html
            linkOptions: {
                myself: {
                    className: 'myLinkClass',
                    events: {
                        click: function (e) {
                            alert('Link clicked!');
                        },
                        mouseover: function (e) {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                },
                others: {
                    className: 'othersLinkClass',
                    events: {
                        click: function (e) {
                            alert('Link clicked!');
                        },
                        mouseover: function (e) {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                }
            }
        }
    
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