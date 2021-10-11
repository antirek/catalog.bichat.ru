<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <q-card-section class="q-pa-md">
              <h4>Login</h4>
            <q-input outlined v-model="mobile" label="Phone number" />            
            <q-input outlined v-model="code" label="Code" />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat color="blue" icon="login" @click="login"/>
          </q-card-actions>
        </q-card>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { User} from '../api/api';

export default defineComponent({
  name: 'Login',
  data: function () {
    return {
        mobile: '',
        code: '',
    }
  },
  methods: {
      login: function() {
          User.login(this.mobile, this.code);
      }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  min-height: 300px
</style>