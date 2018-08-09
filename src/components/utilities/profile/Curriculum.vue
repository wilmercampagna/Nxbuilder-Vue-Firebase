<template>
  <div class="container-fluid box">
    <div class="container-fluid pdnb1 bckg1 bdrd1">
      <div class="columns is-multiline">
        <div class="column is-3 visible-mobile">
          <figure>
            <img :src="users.userPhoto" alt="logo" class="image" height="80px" width="80px">
          </figure>
        </div>
        <div class="column is-9 posit">
          <h1 class="title is-4 txcolor"> {{users.firstName}} {{users.lastName}} </h1>
          <h2 class="subtitle is-5 txcolor"> {{users.employement}} {{users.enterprise}} </h2>
        </div>
        <div class="column is-3 is-hidden-mobile">
          <figure>
            <img :src="users.userPhoto" alt="" class="image">
          </figure>
        </div>
      </div>
    </div>
    <div class="container-fluid pdnb1 bckg2 txcolor2">
      <p v-if="users.profesion"> {{users.profesion}} - {{users.undergradeUniversity}} </p>
      <p v-if="users.postUniversity"> {{users.principalGrade}} - {{users.postUniversity}} </p>
      <p v-if="users.postUniversity2"> {{users.secondaryGrade}} - {{users.postUniversity2}} </p>
      <p v-if="users.postUniversity3"> {{users.thirdGrade}} - {{users.postUniversity3}} </p>
    </div>
    <div class="container-fluid pdnb1 bckg2 txcolor2">
      <p> <strong class="txcolor2">Perfil:</strong> {{users.profile}} </p>
    </div>
    <div class="container-fluid pdnb1 bckg2 txcolor2">
      <p> <strong class="txcolor2">Manejo de Software:</strong> {{users.softwaredomain}} </p>
    </div>
    <div class="container-fluid pdnb1 bckg2 txcolor2">
      <p> <strong class="txcolor2">Experiencia:</strong>  {{users.experience}} </p>
    </div>
    <div class="container-fluid pdnb1 bckg1 txcolor has-text-centered bdrd2">
      <p> <strong class="txcolor">Contacto -</strong> {{users.userEmail}} {{users.phone}} {{users.mobilePhone}} </p>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: mapState(['users'])
}
</script>

<style lang="scss" scoped>
  .visible-mobile {
    display: none;
  }
  .image {
    border-radius: 50%;
  }
  .box {
    padding: 8px !important;
  }
  .bckg1 {
    background-color: rgba(241, 244, 246, 0.6);
  }
  .bckg2 {
    background-color: rgba(241, 244, 246, 0.7);
  }
  .txcolor {
    color: #005792;
  }
  .txcolor2 {
    color: #00204A;
  }
  .pdnb1 {
    padding: 10px !important;
  }
  .bdrd1 {
    border-radius: 10px 10px 0 0 ;
  }
  .bdrd2 {
    border-radius: 0 0 10px 10px ;
  }
  .posit {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .box {
    background: #F1F4F6 url(../../../assets/vuebc3.jpeg) center / cover;
  }
@media screen and (max-width: 768px) {
  .visible-mobile {
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
  }
}
</style>
