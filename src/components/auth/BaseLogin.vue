<template>
  <section class="hero is-fullheight">
    <div class="container-fluid glob">
      <py-language class="button"></py-language>
    </div>
    <div class="hero-body">
      <div class="box">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="container-fluid">
              <figure class="marb">
                <img src="@/assets/logo.png" width="150px">
              </figure>
            </div>
            <h1 class="title is-4 has-text-centered"> {{ $t('login') }} </h1>
            <div class="block">
              <p class="control has-icon">
                <slot name="userName"></slot>
                <span class="icon is-small">
                  <i class="fa fa-user"></i>
                </span>
              </p>
              <p class="control has-icons-left has-icons-right">
                <slot name="email"></slot>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </p>
              <p class="control has-icon">
                <slot name="password"></slot>
                <span class="icon is-small">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
              <slot name="action-b1"></slot>
            </div>
            <slot name="buttons"></slot>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import PyLanguage from '@/components/utilities/Language'

export default {
  name: 'BaseLogin',
  components: { PyLanguage }
}

</script>

<style lang="scss" scoped>
  .glob {
    display: inline-flex;
    justify-content: flex-end !important;
  }
  .title {
    color: #F1F4F6;
  }
  .subtitle {
    font-weight: bold;
    color: #F1F4F6;
  }
  .subtitle a {
    font-weight: bold;
    // color: #209cee;
  }
  .hero {
    background: #F1F4F6 url(../../assets/vuebc1.jpeg) center / cover;
  }
  @media (max-width: 1280px) {.hero {background: #F1F4F6 url(../../assets/vuebc2.jpeg) center / cover;}}
  @media (max-width: 640px) {.hero {background: #F1F4F6 url(../../assets/vuebc3.jpeg) center / cover;}}
  .hero-body {
    justify-content: center;
  }
  .container-fluid {
    display:flex;
    justify-content: center;
  }
  .box {
    background-color: rgba(67,83,100,0.4);
    border: groove;
    border-color: #F1F4F6;
  }
  .block p {
    margin-bottom: 10px;
  }
  .block {
    margin-bottom: 0.7rem !important;
  }
  h4 {
    margin-bottom: 0.9rem !important;
  }
  .footer {
    padding: 0;
    background-color: rgba(25,25,10,0.1);
  }
  .marb {
    margin-bottom: 15px;
    max-width: 180px
  }
  .card-footer {
    border-top: none;
  }
  .card-footer-item {
    border: none;
  }
</style>
