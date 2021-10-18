<template>
  <q-layout view="lHh Lpr lFf" padding class="docs-btn row justify-center">
    <q-header elevated  padding class="docs-btn row justify-center">
      <q-toolbar style="width: 1000px; max-width: 190vw;">
        <q-toolbar-title>
          <strong>Бизнес-чат / 
            <router-link to="/" class="none">Каталог</router-link>
          </strong>
        </q-toolbar-title>
         <q-space />
        <q-btn label="Login" flat to="/login" v-if="!authenticated"/>
        <q-btn flat>
          <q-chip v-if="authenticated">
            <q-avatar>
              <img :src="user.avatarUrl">
            </q-avatar>
            {{ user.name }}
          </q-chip>
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>

                <q-btn flat label="Profile" />
                <q-btn flat label="Manager mode" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img :src="user.avatarUrl">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user.name }}</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  to="/logout"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
        
      </q-toolbar>
    </q-header>

    <q-page-container style="width: 1000px; max-width: 190vw;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  computed: {
    authenticated () {
      return this.$store.getters['user/isAuthenticated'];
    },
    user () {
      return this.$store.getters['user/user'];
    }
  },
  mounted () {
    // console.log('mounted')
    // console.log('qwqw', this.$store.getters['user/isAuthenticated'])
    // console.log('qwqw', this.$store.getters['user/name'])
    // console.log('qwqw', this.$store.getters['user/authKey'])
    // console.log('qwqw', this.$store.getters)
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
