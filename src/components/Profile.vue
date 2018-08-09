<template>
  <div class="fondo">
    <header-profile class="spac"></header-profile>
    <landing-body>
      <template slot="panel">
        <div class="columns dir">
          <div class="column personal-info is-hidden-mobile">
            <div class="container-fluid">
              <h1 class="title is-4 is-marginless">{{users.userName}}</h1>
              <h2 class="tx-info"> {{users.profesion}} </h2>
              <h2 class=" tx-info"> {{users.principalGrade}} </h2>
              <span>
                <span> <i class="fa fa-map-marker"></i> </span>
                <span class="tx-info"> {{users.city}} - {{users.country}} </span>
              </span>
            </div>
          </div>
          <div class="column">
            <py-panel></py-panel>
          </div>
        </div>
      </template>
      <template slot="edit">
        <div class="container-fluid mgpd">
          <div class="btncls">
            <a @click="showForm">
              <span class="icon">
                <i class="fa fa-edit"></i>
              </span>
              <span>Editar</span>
            </a>
          </div>
        </div>
      </template>
      <template slot="carousel">
        <personal-info v-show="form"></personal-info>
      </template>
      <template slot="process">
        <py-curriculum></py-curriculum>
      </template>
      <template slot="announces">
        <py-announces></py-announces>
      </template>
    </landing-body>
  </div>
</template>

<script>

import LandingBody from '@/components/utilities/Landingbody'
import PyAnnounces from '@/components/utilities/Announces'
import HeaderProfile from '@/components/utilities/profile/HeaderProfile'
import PyPanel from '@/components/utilities/Panel'
import PersonalInfo from '@/components/utilities/profile/PersonalInfo'
import PyCurriculum from '@/components/utilities/profile/Curriculum'

import {mapState} from 'vuex'

export default {
  components: { LandingBody, PyAnnounces, HeaderProfile, PyPanel, PersonalInfo, PyCurriculum },
  computed: mapState(['users']),
  data () {
    return {
      form: false
    }
  },
  methods: {
    showForm () {
      this.form = !this.form
    }
  }
}
</script>

<style lang="scss" scoped>
  .mgpd {
    margin-right: 5px;
    padding-right: 12px;
    margin-top: 5px;
    padding-top: 12px;
  }
  .fondo {
    background-color: #E2E8EC;
    padding-top: 50px;
  }
  .dir {
    flex-direction: column;
  }
  .personal-info {
    margin-top: 35px !important;
  }
  .tx-info {
    font-size: 18px;
  }
  .btncls {
    display: flex;
    justify-content: flex-end;
  }
  .btncls a {
    color: #ff3860;
  }
</style>
