<template>
  <div>
    <h1 class="panel-title title is-4 is-marginless"> {{ $t('services') }} </h1>
    <nav class="panel lssbd">
      <div class="line-services">
        <a class="panel-block lssbd">
          <span class="panel-icon">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </span>
          <span class="txtall"> {{ $t('notifications') }} </span>
        </a>
        <a class="panel-block lssbd">
          <span class="panel-icon">
            <i class="fas fa-road" aria-hidden="true"></i>
          </span>
          <span class="txtall"> {{ $t('buildControl') }} </span>
        </a>
        <a class="panel-block lssbd">
          <span class="panel-icon">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </span>
          <span class="txtall"> {{ $t('supervision') }} </span>
        </a>
        <a class="panel-block lssbd">
          <span class="panel-icon">
            <i class="fas fa-toolbox" aria-hidden="true"></i>
          </span>
          <span class="txtall"> {{ $t('utilities') }} </span>
        </a>
        <a class="panel-block lssbd">
          <span class="panel-icon">
            <i class="fas fa-pen-fancy" aria-hidden="true"></i>
          </span>
          <span class="txtall"> {{ $t('design') }} </span>
        </a>
        <a v-if="users.isSuperAdmin" class="panel-block lssbd has-text-danger" @click="loadProcess">
          <span class="panel-icon icon">
            <i class="fa fa-lg fa-cloud-upload has-text-danger" aria-hidden="true"></i>
          </span>
          <span class="txtall">Cargar Secop I</span>
        </a>
        <a v-if="users.isSuperAdmin" class="panel-block lssbd has-text-danger" @click="loadProcessII">
          <span class="panel-icon icon">
            <i class="fa fa-lg fa-cloud-upload has-text-danger" aria-hidden="true"></i>
          </span>
          <span class="txtall">Cargar Secop II</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Panel',
  computed: mapState(['users']),
  methods: {
    ...mapActions(['loadProcess', 'loadProcessII'])
  }
}
</script>

<style lang="scss" scoped>
  .lssbd {
    border: none;
    border-top: none;
    border-width: 0;
    border-color: none;
  }
  .panel-heading {
    background-color: #E2E8EC !important;
    font-weight: bold;
  }
  .panel-title {
    font-size: 20px;
    font-weight: bold;
  }
@media (max-width: 770px) {
  .lssbd {
    display: inline-grid;
    justify-content: center;
    justify-items: center;
  }
  .panel {
    display: grid;
  }
  .txtall {
    font-size: 12px;
  }
  .line-services {
    display: flex;
  }
}
@media (max-width: 600px) {
  .fa {
    font-size: 20px;
  }
  .txtall {
    display: none;
  }
  .panel-title {
    display: none;
  }
}
</style>
