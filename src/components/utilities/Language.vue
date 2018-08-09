<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <span class="navbar-item">
      <a class="is-primary">
        <i class="fas fa-globe-americas fa-lg iconcolor centrar"></i>
      </a>
    </span>
    <div class="navbar-dropdown">
      <a class="navbar-item has-text-centered" @click="selectLang('en')">🇬🇧</a>
      <a class="navbar-item has-text-centered" @click="selectLang('es')">🇪🇸</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss">
  .iconcolor {
    color: #00BBF0;
  }
  .centrar {
    display: flex;
    justify-content: center;
  }
</style>
