<template>
  <base-login>
    <template slot="email">
      <input type="email" v-model="email" v-bind:placeholder="$t('email')" class="input">
    </template>
    <template slot="password">
      <input type="password" v-model="password" @keyup.enter="emailAuth" v-bind:placeholder="$t('password')" class="input">
    </template>
    <template slot="action-b1">
      <a class="button is-info is-half" v-on:click="emailAuth">
        <span class="icon">
          <i class="fa fa-sign-in fa-lg"></i>
        </span>
        <span>Go</span>
      </a>
    </template>
    <template slot="buttons">
      <h4 href="#" class="subtitle is-6 has-text-centered" to="logout"> {{ $t('acc1') }}
        <router-link to="sign-in"> {{ $t('acc2') }} </router-link>
      </h4>
      <h4 href="#" class="subtitle is-6 has-text-centered"> {{ $t('orlog') }} </h4>
      <footer class="card-footer">
        <span class="card-footer-item">
          <a href="#" class="button is-danger" @click="googleAuth">
            <i class="fa fa-google"></i>
          </a>
        </span>
        <span class="card-footer-item">
          <a href="#" class="button is-link" @click="facebookAuth">
            <i class="fa fa-facebook"></i>
          </a>
        </span>
        <span class="card-footer-item">
          <a href="#" class="button is-info" @click="twitterAuth">
            <i class="fa fa-twitter"></i>
          </a>
        </span>
        <!-- <span class="card-footer-item">
          <a href="#" class="button is-primary">
            <i class="fa fa-phone"></i>
          </a>
        </span> -->
      </footer>
    </template>
  </base-login>
</template>

<script>

import {emailAuth, googleAuth, facebookAuth, twitterAuth} from '@/tasks/login'
import BaseLogin from '@/components/auth/BaseLogin'
// import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: { BaseLogin },
  methods: {
    emailAuth,
    googleAuth,
    facebookAuth,
    twitterAuth
  }
}

</script>

<style lang="scss" scoped>
  h4 {
    margin-bottom: 0.9rem !important;
  }
  .footer {
    padding: 0;
    background-color: rgba(25,25,10,0.1);
  }
  .marb {
    margin-bottom: 15px;
    max-width: 80px
  }
  .card-footer {
    border-top: none;
  }
  .card-footer-item {
    border: none;
  }
</style>
