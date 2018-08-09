<template>
  <div class="container-fluid is-marginless pc1">
    <div class="columns pcontent is-desktop">
      <div class="column bcbod">
        <div class="">
          <div class="columns is-multiline pest is-marginless">
            <li class="column pestli" :class="{activo: Lici}" @click="seleccionado = 'PyLicitacion',
            Lici = true, Consul = false, Notice = false, Profe = false">
              <a class="hoov">
                <span class="icon">
                  <i class="fas fa-truck-monster" :class="{txcolor: Lici}"></i>
                </span>
                <span class="txpanel" :class="{txcolor: Lici}"> {{ $t('build') }} </span>
              </a>
            </li>
            <li class="column pestli" :class="{activo: Consul}" @click="seleccionado = 'PyConsultoria',
            Lici = false, Consul = true, Notice = false, Profe = false">
              <a class="hoov">
                <span class="icon">
                  <i class="fas fa-drafting-compass" :class="{txcolor: Consul}"></i>
                </span>
                <span class="txpanel" :class="{txcolor: Consul}"> {{ $t('consultancy') }} </span>
              </a>
            </li>
            <li class="column pestli" :class="{activo: Profe}" @click="seleccionado = 'PyProfesionales',
            Lici = false, Consul = false, Notice = false, Profe = true">
              <a class="hoov">
                <span class="icon">
                  <i class="fas fa-user-astronaut" :class="{txcolor: Profe}"></i>
                </span>
                <span class="txpanel" :class="{txcolor: Profe}"> {{ $t('users') }} </span>
              </a>
            </li>
            <li class="column pestli" :class="{activo: Notice}" @click="seleccionado = 'PyNotices',
            Lici = false, Consul = false, Notice = true, Profe = false">
              <a class="hoov">
                <span class="icon">
                  <i class="fab fa-readme" :class="{txcolor: Notice}"></i>
                </span>
                <span class="txpanel" :class="{txcolor: Notice}"> {{ $t('notice') }} </span>
              </a>
            </li>
          </div>
        </div>
      <div class="column ott">
        <component :is="seleccionado"></component>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import PyLicitacion from '@/components/utilities/landing/Licitacion'
import PyConsultoria from '@/components/utilities/landing/Consultoria'
import PyProfesionales from '@/components/utilities/landing/Profesionales'
import PyNotices from '@/components/utilities/landing/Notices'

export default {
  data () {
    return {
      seleccionado: 'PyLicitacion',
      Lici: true,
      Consul: null,
      Notice: null,
      Profe: null
    }
  },
  components: { PyLicitacion, PyConsultoria, PyProfesionales, PyNotices }
}
</script>

<style lang="scss" scoped>
  .pest {
    display: flex;
    justify-content: center;
  }
  .hoov {
    padding: 8px;
    display: flex;
    justify-content: center;
    color: #005792;
  }
  .pestli {
    padding: 0px;
  }
  .pestli :hover {
    border-bottom-color: #363636;
    color: #363636;
    background-color: whitesmoke;
    border-bottom-color: 2px solid #00BBF0;
    border-radius: 4px 4px 0 0;
  }
  .activo {
    background-color: whitesmoke;
    border: 1px solid grey;
    border-radius: 4px 4px 0 0;
  }
  .txcolor {
    color: #00BBF0 !important;
  }
  .pcontent {
    justify-content: center;
    display: flex !important;
  }
  .pc1 {
    display: block;
  }
  .lcpcontent {
    width: 100%;
    display: grid;
    // align-items: stretch;
  }
  .bcbod {
    background-color: #E2E8EC !important;
  }
  .ott {
    width: 100%;
  }
@media (max-width: 770px) {
  .is-medium {
    font-size: 15px;
    padding-bottom: 25px;
  }
}
@media (max-width: 600px) {
  .icon {
    width: 100%;
  }
  .hoov {
    display: inline-grid;
    width: 100%;
    padding: 4px;
  }
  .txpanel {
    font-size: 12px;
  }
}
</style>
