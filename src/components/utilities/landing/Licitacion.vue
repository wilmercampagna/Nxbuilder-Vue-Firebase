<template>
  <div class="container-fluid">
    <!-- cuando este disponible el servicio de secop II se habilitará esta sección -->
    <div class="field secop is-marginless">
      <input class="is-checkradio is-info" type="radio" id="secopI" value="secopI" v-model="platform" @click="cargarLicitaciones">
      <label class="is-marginless txcolor" for="secopI">Secop I</label>
      <input class="is-checkradio is-info" type="radio" id="secopII" value="secopII" v-model="platform" @click="cargarObraSecopII">
      <label class="is-marginless txcolor" for="secopII">Secop II</label>
    </div>
    <div class="column is-12 is-paddingless nmpr">
      <p v-show="filterBorrador.length" class="ottx">{{ $t('obraBorrador') }}: <a class="resaltx">{{filterBorrador.length}}</a> </p>
      <p v-show="filterPublicado.length" class="ottx">{{ $t('obraPublicada') }}: <a class="resaltx">{{filterPublicado.length}}</a> </p>
    </div>
    <div class="column is-12 bsq is-paddingless">
      <input type="search" class="input has-text-centered brds" :placeholder="$t('search')" v-model="busqueda">
    </div>
    <div class="columns is-multiline is-paddingless bxpc" v-for="licitacion in filterProcess" :key="licitacion.id">
      <div class="column bcx1 box is-marginless is-12">
        <div class="dpl"> {{ $t('entity') }}:</div> {{licitacion.entidad | mayuMinu}} </div>
      <div class="column bxcls is-6 box is-marginless"><div class="dpl">{{ $t('date') }}:</div> {{licitacion.fechacargue.substr(0, 10)}} </div>
      <div class="column bxcls is-6 box is-marginless"> <div class="dpl">{{ $t('state') }}:</div> {{licitacion.estado}} <br>
        <p v-if="licitacion.fase" class="dpl">{{ $t('phase') }}:</p> {{licitacion.fase}} </div>
      <div class="column bxcls box is-marginless is-6">
        <p class="dpl">{{ $t('nprocess') }}: </p> <a class="resaltx" :href="licitacion.urlprocess" target="_blank"> {{ licitacion.numprocess }} </a></div>
      <div class="column bxcls box is-marginless is-6">
        <p class="dpl">{{ $t('cost') }}: </p> {{licitacion.valor | currency}} </div>
      <div class="column bcx2 box is-12">
        <div class="dpl">{{ $t('object') }}:</div> {{licitacion.objeto}} <a class="resaltx2"> {{licitacion.fuente}} </a>  </div>
    </div>
  </div>
</template>

<script>
import {cargarLicitaciones, cargarObraSecopII} from '@/services/colombia-compra'
export default {
  mounted () {
    this.cargarLicitaciones()
    // setTimeout(() => { this.llamarLicitaciones() }, 7000)
  },
  data () {
    return {
      busqueda: '',
      platform: 'secopI',
      licitacionesdb: []
    }
  },
  computed: {
    filterProcess () {
      return this.licitacionesdb.filter((licitacion) => {
        return licitacion.entidad.includes(this.busqueda.toLowerCase())
      })
    },
    filterBorrador () {
      return this.licitacionesdb.filter((borradores) => {
        return borradores.estado.includes('Borrador')
      })
    },
    filterPublicado () {
      return this.licitacionesdb.filter((publicado) => {
        return publicado.estado.includes('Publicado')
      })
    }
  },
  methods: {
    cargarLicitaciones,
    cargarObraSecopII
  }
}
</script>

<style lang="scss" scoped>
  .secop {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nmpr {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .brds {
    border-radius: 20px !important;
    margin-bottom: 25px;
  }
  .vsl {
    display: inline-block;
  }
  .dpl {
    font-weight: bold;
    display: inline-block !important;
  }
  .txcolor {
    color: #005792;
    font-size: 13px;
  }
  .ottx {
    color: #005792;
    font-weight: initial;
    font-size: 11px;
  }
  .resaltx {
    color: #ff1f4b;
  }
  .resaltx2 {
    color: #209cee;
    // font-weight: bold;
  }
  .bxcls {
    border-radius: 0%;
    background-color: #F1F4F6;
  }
  .bxpc {
    margin-bottom: 25px;
  }
  .bcx1 {
    border-radius: 10px 10px 0 0;
  }
  .bcx2 {
    border-radius: 0 0 10px 10px;
    background-color: #F1F4F6;
  }
  .column p {
    font-weight: bold;
  }
  .column {
    padding: 8px;
  }
@media (max-width: 600px) {
  .bxcls {
    font-size: 12px;
  }
  .bcx2 {
    font-size: 12px;
  }
  .bcx1 {
    font-size: 12px;
  }
  .brds {
    font-size: 12px;
  }
}
</style>
