<template>
  <div class="column colcolor">
    <div class="container-fluid">
      <form @submit="saveUser">
        <div class="box">
          <h1 class="title is-5 mgr5">Datos Personales</h1>
          <div class="columns is-multiline">
            <div class="column is-half">
              <div class="">
                <label>Nombres</label>
                <input class="input" type="text" placeholder="Nombres" v-model="formulario.firstName">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Apellidos</label>
                <input class="input" type="text" placeholder="Apellidos" v-model="formulario.lastName">
              </div>
            </div>
            <div class="column is-half">
             <div class="">
                <label>Telefono</label>
                <input class="input" type="tel" placeholder="Telefono" v-model="formulario.phone">
             </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Celular</label>
                <input class="input" type="tel" placeholder="telefono móvil" v-model="formulario.mobilePhone">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>País</label>
                <input class="input" type="text" placeholder="País" v-model="formulario.country">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Región</label>
                <input class="input" type="text" placeholder="Región" v-model="formulario.state">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Ciudad</label>
                <input class="input" type="text" placeholder="Ciudad" v-model="formulario.city">
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <h1 class="title is-5 mgr5">Formacion Académica</h1>
          <div class="columns is-multiline">
            <div class="column is-half">
              <div class="">
                <label>Profesión</label>
                <input class="input" type="text" placeholder="Profesión" v-model="formulario.profesion">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Universidad</label>
                <input class="input" type="text" placeholder="Universidad" v-model="formulario.undergradeUniversity">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Postgrados</label>
                <input class="input" type="text" placeholder="Postgrado Principal" v-model="formulario.principalGrade">
                <input class="input" type="text" placeholder="Postgrado2" v-model="formulario.secondaryGrade">
                <input class="input" type="text" placeholder="Postgrado3" v-model="formulario.thirdGrade">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Universidad</label>
                <input class="input" type="text" placeholder="Universidad" v-model="formulario.postUniversity">
                <input class="input" type="text" placeholder="Universidad" v-model="formulario.postUniversity2">
                <input class="input" type="text" placeholder="Universidad" v-model="formulario.postUniversity3">
              </div>
            </div>
            <div class="column">
              <div class="">
                <label>Manejo de Software</label>
                <textarea class="textarea is-info" type="text" placeholder="Resume el software que dominas" v-model="formulario.softwaredomain"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <h1 class="title is-5 mgr5">Ocupación y Experiencia</h1>
          <div class="columns is-multiline">
            <div class="column is-half">
              <div class="">
                <label>Ocupación</label>
                <input class="input" type="text" placeholder="Ocupación" v-model="formulario.employement">
              </div>
            </div>
            <div class="column is-half">
              <div class="">
                <label>Empresa</label>
                <input class="input" type="text" placeholder="Empresa" v-model="formulario.enterprise">
              </div>
            </div>
            <div class="column is-12">
             <div class="">
                <label>Perfil</label>
                <textarea class="textarea is-info" type="text" placeholder="Haz un resumen de tu perfil profesional" v-model="formulario.profile"></textarea>
             </div>
            </div>
            <div class="column is-12">
             <div class="">
                <label>Experiencia</label>
                <textarea class="textarea is-info" type="text" placeholder="Haz un resumen de tus destrezas y de tu experiencia" v-model="formulario.experience"></textarea>
             </div>
            </div>
          </div>
        </div>
        <div>
          <button class="button is-danger">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import {saveUser} from '@/services/save-users'

export default {
  name: 'PersonalInfo',
  data () {
    return {
      formulario: {
        firstName: null,
        lastName: null,
        phone: null,
        mobilePhone: null,
        country: null,
        state: null,
        city: null,
        profesion: null,
        undergradeUniversity: null,
        principalGrade: null,
        secondaryGrade: null,
        thirdGrade: null,
        postUniversity: null,
        postUniversity2: null,
        postUniversity3: null,
        softwaredomain: null,
        employement: null,
        enterprise: null,
        profile: null,
        experience: null,
        profileData: true
      }
    }
  },
  computed: mapState(['uid']),
  methods: {
    saveUser
  }
}
</script>

<style lang="scss" scoped>
  .mgr5 {
    margin-bottom: 10px;
  }
  .btncls {
    display: flex;
    justify-content: flex-end;
  }
  .btncls a {
    color: #ff3860;
  }
  .icon {
    padding-right: 10px;
  }
  .box {
    margin-bottom: 10px;
  }
  .colcolor {
    background-color: #F1F4F6;
  }
</style>
