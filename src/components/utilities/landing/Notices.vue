<template>
  <div class="">
    <div class="columns is-multiline is-centered">
      <div v-if="users.isSuperAdmin" class="column is-12">
        <div class="container-fluid mgpd">
          <div class="btncls">
            <a @click="showForm">
              <span class="icon">
                <i class="fa fa-edit"></i>
              </span>
              <span>Add Notice</span>
            </a>
          </div>
        </div>
        <form @submit.prevent="saveNotice" v-if="users.isSuperAdmin" v-show="form">
          <div class="columns is-multiline">
            <div class="column is-half">
              <label for="">Titulo</label>
              <input class="input" type="text" placeholder="Titulo" v-model="notices.title">
            </div>
            <div class="column is-half">
              <label for="">url de la imagen</label>
              <input class="input" type="text" placeholder="url img" v-model="notices.urlImg">
            </div>
            <div class="column is-half">
              <label for="">Url de la fuente</label>
              <input class="input" type="text" placeholder="root url" v-model="notices.urlNotices">
            </div>
            <div class="column is-half">
              <label for="">Fuente</label>
              <input class="input" type="text" placeholder="fuente" v-model="notices.root">
            </div>
            <div class="column">
              <label for="">Nota corta</label>
              <textarea class="textarea" type="text" placeholder="Nota corta" v-model="notices.notices"></textarea>
            </div>
          </div>
          <div>
            <button class="button is-danger">Publicar</button>
          </div>
        </form>
      </div>
      <div class="column is-10 bckg" v-for="(notice, i) in noticesdb" :key="i">
        <a class="bdrd" :href="notice.urlNotices" target="_blanck">
          <div class="container-fluid bdrd" :style="{ 'background-image': 'url(' + notice.urlImg + ')'}"
              style="background-position: center center; background-repeat: no-repeat; background-size: 100% 100%;">
            <div class="bckg1">
              <p class="title is-6 txcolor pdn1"> {{notice.title}} </p>
            </div>
            <div class="interm"></div>
            <div class="bckg2 pdn1">
              <p class="txcolor"> {{notice.notices}} </p>
              <div class="ftcontent">
                <p class="has-text-grey-light is-size-7"> {{notice.fecha}} </p>
                <p class="has-text-success" style="justify-content: flex-end;"> {{notice.root}} </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {saveNotice, loadNotices} from '@/services/notices'
export default {
  name: 'Notices',
  mounted () {
    this.loadNotices()
  },
  data () {
    return {
      form: false,
      notices: {
        title: null,
        urlImg: null,
        notices: null,
        urlNotices: null,
        root: null
      },
      noticesdb: {}
    }
  },
  computed: mapState(['users']),
  methods: {
    showForm () {
      this.form = !this.form
    },
    saveNotice,
    loadNotices
  }
}
</script>

<style lang="scss" scoped>
  .ftcontent {
    display: flex;
    flex-direction: row;
  }
  .ftcontent p {
    display: flex;
    width: 50%;
  }
  .mgpd {
    margin-right: 5px;
    padding-right: 12px;
    margin-top: 5px;
    padding-top: 12px;
  }
  .btncls {
    display: flex;
    justify-content: flex-end;
  }
  .btncls a {
    color: #ff3860;
  }
  .bdrd {
    border-radius: 10px;
  }
  .interm {
    padding-top: 90px;
  }
  .hero {
    border-radius: 10px;
  }
  .bckg1 {
    background: rgba(30, 41, 48, 0.4);
    border-radius: 10px 10px 0 0;
  }
  .bckg2 {
    background: rgba(30, 41, 48, 0.4);
    border-radius: 0 0 10px 10px;
  }
  .bckg {
    background: white;
  }
  .pdn1 {
    padding: 15px;
  }
  .txcolor {
    color: #F1F4F6;
  }
</style>
