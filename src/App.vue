<template>
  <div id="app">
    <py-header></py-header>
    <transition appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import PyHeader from '@/components/layouts/Header'

export default {
  name: 'App',
  components: { PyHeader }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
// @import '~wysiwyg.css/wysiwyg.sass';

</style>
