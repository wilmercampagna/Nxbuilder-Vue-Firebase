<template>
  <div class="container-fluid bckg0">
    <div class="container spmrgn">
      <div class="hero bckg1">
        <div class="hero-body">
          <h1 class="title txcolor1"> Realiza los ajustes de tu cuenta </h1>
        </div>
      </div>
      <div class="container bckg2">
        <div class="columns is-multiline intpdn">
          <div class="column is-10 txcolor3">
            <p class="subtitle is-4 is-marginless">Activa/desactiva para mostrar/ocultar tus datos</p>
            <p class="subtitle is-6"> Al estar activa esta opción tu nombre, cargo, empresa en la que laboras,
              tu profesión, tu perfil, ubicación y datos de contacto podrán ser visibles por otros usuarios
              en la sección de profesionales de la página de inicio y podrán acceder a la sección Mis Datos de tu perfil.
            </p>
          </div>
          <div class="column is-2">
            <div class="field">
              <input id="profileData" type="checkbox" name="profileData"
              class="switch is-rounded is-outlined is-success" v-model="settings.profileData" @click="isHidden">
              <label for="profileData"> {{show}} </label>
            </div>
          </div>
        </div>
        <div class="container position">
          <div class="button is-danger" @click="saveSettings">Guardar Cambios</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {saveSettings} from '@/services/save-users'
export default {
  name: 'Settings',
  data () {
    return {
      settings: {
        profileData: true
      },
      show: 'Mostrar'
    }
  },
  computed: mapState(['uid']),
  methods: {
    isHidden () {
      if (!this.settings.profileData) {
        this.show = 'Mostrar'
      } else {
        this.show = 'Ocultar'
      }
    },
    saveSettings
  }
}
</script>

<style lang="scss" scoped>
  .position {
    display: flex;
    justify-content: flex-end;
  }
  .bckg0 {
    background-color: #F1F4F6;
  }
  .bckg1 {
    background-color: #00BBF0;
  }
  .bckg2 {
    background-color: white;
  }
  .txcolor1 {
    color: #F1F4F6;
  }
  .txcolor2 {
    color: #005792;
  }
  .txcolor3 {
    color: #00204A;
  }
  .spmrgn {
    margin-top: 52px;
  }
  .intpdn {
    padding: 15px;
  }
</style>
