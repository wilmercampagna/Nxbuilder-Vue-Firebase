<template>
  <div v-if="uid" class="header">
    <nav class="navbar head">
      <div class="container marger">
        <div class="navbar-brand">
          <a class="navbar-item pdlog">
            <router-link to="home" style="display: contents">
              <img src="@/assets/logo.png" alt="logo"></router-link>
          </a>
          <a class="navbar-item is-hidden-mobile pdl">
            <router-link to="home" class="textcolor">Builder </router-link>
          </a>
          <a class="navbar-item pd5">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input type="search" class="input has-text-centered" v-bind:placeholder="$t('search')"
                :value="search" @input="updateSearch">
              </div>
              <div class="control">
                <div class="button buttoncolor">
                  <a class="">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </a>
          <a class="navbar-item avpadl pd5">
            <!-- <img src="@/assets/avatar.png" alt="logo"> -->
            <router-link v-show="users.userPhoto" :to="`${users.userName}`" class="avatar"><img class="avmg" :src="users.userPhoto" alt="logo"></router-link>
          </a>
          <a class="navbar-item avpadr is-hidden-mobile">
            <router-link :to="`${users.userName}`" class="textcolor"> {{users.userName}} </router-link>
          </a>
          <span class="navbar-burger burger textcolor" :class="{'is-active': burgermenu}" data-target="navbarMenu" @click="openMenu">
          <span></span>
          <span></span>
          <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbarMenu navbar-menu is-pulled-right" :class="{'is-active': menu}">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-item">
                <a class="is-primary centeritem">
                  <i class="far fa-bell fa-lg iconcolor"></i>
                </a>
              </span>
              <div class="navbar-dropdown">
                <a class="navbar-item has-text-danger">In construction</a>
              </div>
            </div>
            <router-link to="help" class="navbar-item centeritem">
              <i class="far fa-question-circle fa-lg iconcolor"></i>
            </router-link>
            <py-language></py-language>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"></a>
              <div class="navbar-dropdown iconcolor">
                <router-link to="/profile" class="navbar-item centeritem"> {{ $t('profile') }} </router-link>
                <router-link to="/settings" class="navbar-item centeritem">{{ $t('adjust') }}</router-link>
              </div>
            </div>
            <a href="" class="navbar-item centeritem" v-on:click="commitLogOut">
              <i class="fa fa-power-off"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import PyLanguage from '@/components/utilities/Language'

export default {
  name: 'Header',
  created () {
    this.commitProfile()
  },
  data () {
    return {
      burgermenu: false,
      menu: false
    }
  },
  components: { PyLanguage },
  computed: {
    ...mapState(['users', 'uid']),
    ...mapState({
      search: state => state.search
    })
  },
  methods: {
    ...mapActions(['commitProfile', 'commitLogOut']),
    updateSearch (e) {
      this.$store.commit('updateSearch', e.target.value)
    },
    openMenu () {
      this.burgermenu = !this.burgermenu
      this.menu = !this.menu
    }
  }
}
</script>

<style lang="scss" scoped>
  .centeritem {
    display: flex;
    justify-content: center;
  }
  .fa-power-off {
    color: #ff3860;
    font-size: 25px;
  }
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
  }
  .avatar {
    display: contents;
  }
  .avmg {
    border-radius: 50%;
  }
  .avpadl {
    padding-right: 0px;
  }
  .avpadr {
    padding-left: 5px;
  }
  .head {
    background-color: #00204A;
  }
  .textcolor {
    color: #F1F4F6;
    font-weight: bold;
  }
  .iconcolor {
    color: #00BBF0;
  }
  .buttoncolor {
    background-color: #F1F4F6;
    border: none;
  }
  .pdl {
    padding-left: 0;
  }
  .pdlog {
    padding: 5px 3px 11px 12px;
  }
@media screen and (max-width: 1087px) {
  .navbar-menu {
    background-color: rgba(241, 244, 246, 0.7);
    border-radius: 0px 0px 0px 10px;
  }
}
@media (max-width: 500px) {
  .input {
    width: 170px !important;
  }
  .pd5 {
    padding-right: 0px;
  }
}
</style>
