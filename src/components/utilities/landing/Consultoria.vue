<template>
  <div class="container-fluid">
    <!-- cuando este disponible el servicio de secop II se habilitará esta sección -->
    <div class="field secop is-marginless">
      <input class="is-checkradio is-info" type="radio" id="secopI" value="secopI" v-model="platform" @click="cargarConsultorias">
      <label class="is-marginless txcolor" for="secopI">Secop I</label>
      <input class="is-checkradio is-info" type="radio" id="secopII" value="secopII" v-model="platform" @click="cargarConsultoriasII">
      <label class="is-marginless txcolor" for="secopII">Secop II</label>
    </div>
    <div class="column is-12 is-paddingless nmpr">
      <p v-show="filterBorrador.length" class="ottx">{{ $t('consBorrador') }}: <a class="resaltx">{{filterBorrador.length}}</a> </p>
      <p v-show="filterPublicado.length" class="ottx">{{ $t('consPublicada') }}: <a class="resaltx">{{filterPublicado.length}}</a> </p>
    </div>
    <div class="column is-12 bsq is-paddingless">
      <div class="column is-12 bsq is-paddingless">
        <input type="search" class="input has-text-centered brds" :placeholder="$t('search')" v-model="busqueda">
      </div>
    </div>
    <div class="columns is-multiline is-paddingless bxpc" v-for="Consultoria in filterProcess" :key="Consultoria.id">
      <div class="column bcx1 box is-marginless is-12">
        <div class="dpl">{{ $t('entity') }}: </div> {{Consultoria.entidad | mayuMinu}}</div>
      <div class="column bxcls is-6 box is-marginless"><div class="dpl">{{ $t('date') }}:</div> {{Consultoria.fechacargue.substr(0, 10)}} </div>
      <div class="column bxcls is-6 box is-marginless"> <div class="dpl">{{ $t('state') }}:</div> {{Consultoria.estado}} <br>
        <p v-if="Consultoria.fase" class="dpl">{{ $t('phase') }}:</p> {{Consultoria.fase}} </div>
      <div class="column bxcls box is-marginless is-6">
        <p class="dpl">{{ $t('nprocess') }}:</p> <a class="resaltx" :href="Consultoria.urlprocess" target="_blank">{{Consultoria.numprocess}}</a></div>
      <div class="column bxcls box is-marginless is-6">
        <p class="dpl">{{ $t('cost') }}:</p> {{Consultoria.valor | currency}} </div>
      <div class="column bcx2 box is-12">
        <div class="dpl">{{ $t('object') }}:</div> {{Consultoria.objeto}} <a class="resaltx2"> {{Consultoria.fuente}} </a> </div>
    </div>
  </div>
</template>

<script>

import {cargarConsultorias, cargarConsultoriasII} from '@/services/colombia-compra'

export default {
  name: 'Consultoria',
  mounted () {
    this.cargarConsultorias()
  },
  data () {
    return {
      busqueda: '',
      platform: 'secopI',
      consultoriasdb: []
    }
  },
  computed: {
    filterProcess () {
      return this.consultoriasdb.filter((Consultoria) => {
        return Consultoria.entidad.includes(this.busqueda.toLowerCase())
      })
    },
    filterBorrador () {
      return this.consultoriasdb.filter((borradores) => {
        return borradores.estado.includes('Borrador')
      })
    },
    filterPublicado () {
      return this.consultoriasdb.filter((publicado) => {
        return publicado.estado.includes('Publicado')
      })
    }
  },
  methods: {
    cargarConsultorias,
    cargarConsultoriasII
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
  .dpl {
    font-weight: bold;
    display: inline-block !important;
  }
  .txcolor {
    color: #005792;
    font-size: 15px;
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
