<template>
  <base-login>
    <template slot="userName">
      <input type="text" v-model="userName" v-bind:placeholder="$t('userName')" class="input">
    </template>
    <template slot="email">
      <input type="email" v-model="email" v-bind:placeholder="$t('email')" class="input">
    </template>
    <template slot="password">
      <input type="password" v-model="password" @keyup.enter="signIn" v-bind:placeholder="$t('password')" class="input">
    </template>
    <template slot="action-b1">
      <a class="button is-info is-half" v-on:click="signIn">
        <span class="icon">
          <i class="fa fa-sign-in fa-lg"></i>
        </span>
        <span>Create</span>
      </a>
    </template>
    <template slot="buttons">
      <h4 href="/login" class="subtitle is-6 has-text-centered" to="login">
        <router-link to="login"> {{ $t('gologin') }} </router-link>
      </h4>
    </template>
  </base-login>
</template>

<script>
import BaseLogin from '@/components/auth/BaseLogin'
import {signIn} from '@/tasks/login'

export default {
  name: 'SignIn',
  data: function () {
    return {
      userName: '',
      email: '',
      password: ''
    }
  },
  components: { BaseLogin },
  methods: {
    signIn
  }
}
</script>

<style lang="scss" scoped>
  .subtitle a {
    font-weight: bold;
    color: #F1F4F6;
  }
  h4 {
    margin-bottom: 0.9rem !important;
  }
</style>
