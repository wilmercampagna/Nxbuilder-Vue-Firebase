<template>
  <div class="">
    <div :id="i" class="card cdb" v-for="(prof, i) in profesionales" :key="i" :index="i">
      <div class="card-content is-paddingless">
        <div v-if="prof.profileData">
          <div class="media bckg1">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="prof.userPhoto" alt="User Image">
              </figure>
            </div>
            <div class="media-content jft">
              <p class="title is-5 is-marginless"> {{prof.firstName}} {{prof.lastName}} </p>
              <p class="title is-6"> {{prof.employement}} {{prof.enterprise}} </p>
              <p class="subtitle is-6 sbm"> {{prof.profesion}} </p>
              <p class="subtitle is-7"> {{prof.principalGrade}} </p>
            </div>
          </div>
          <div class="content subtitle is-7 pdnbody">
            <p> {{prof.profile}} </p>
            <p class="has-text-centered">Email: {{prof.userEmail}} </p>
            <p v-if="prof.phone" class="has-text-centered">Cel: {{prof.phone}} </p>
            <p class="has-text-centered">{{ $t('location') }}: {{prof.city}} - {{prof.state}} - {{prof.country}} </p>
            <a @click="doLaunch(i)"> <p class="has-text-danger has-text-right">{{ $t('more') }}...</p> </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modalFilter">
      <div class="modal" :class="{'is-active': launch}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <div class="secondData">
              <div class="sdimg">
                <img :src="modalFilter.userPhoto" alt="User avatar">
              </div>
              <div class="delButton">
                <button class="delete has-background-danger" aria-label="close" @click="doLaunch"></button>
              </div>
            </div>
            <div class="firstData">
              <p class="modal-card-title"> {{modalFilter.firstName}} {{modalFilter.lastName}} </p>
              <p class="modal-card-subtitle"> {{modalFilter.employement}} {{modalFilter.enterprise}} </p>
            </div>
          </header>
          <section class="modal-card-body">
            <div class="container-fluid bckg2">
              <div class="tabs is-boxed rspdsn is-centered">
                <ul>
                  <li :class="{'is-active': profile}" @click="profile = true, comments = false">
                    <a>
                      <span class="icon"><i class="fas fa-user-tie" aria-hidden="true"></i></span>
                      <span class="txdim"> Perfil </span>
                    </a>
                  </li>
                  <li :class="{'is-active': comments}" @click="profile = false, comments = true">
                    <a>
                      <span class="icon"><i class="fab fa-rocketchat" aria-hidden="true"></i></span>
                      <span class="txdim"> Comentarios </span>
                    </a>
                  </li>
                  <div class="firstData">
                    <vue-stars name="rank" active-color="#00BBF0" inactive-color="#999999" shadow-color="#ffff00"
                      :max="5" :readonly="true" char="" inactive-char=""
                      class="fa rspdsn" v-model="rank"></vue-stars>
                    <div class="rspdsn">Calificación {{rank}} </div>
                  </div>
                </ul>
              </div>
            </div>
            <div v-if="profile">
              <div class="container-fluid pdnb1 bckg2 txcolor2">
                <p v-if="modalFilter.profesion"> {{modalFilter.profesion}} - {{modalFilter.undergradeUniversity}} </p>
                <p v-if="modalFilter.postUniversity"> {{modalFilter.principalGrade}} - {{modalFilter.postUniversity}} </p>
                <p v-if="modalFilter.postUniversity2"> {{modalFilter.secondaryGrade}} - {{modalFilter.postUniversity2}} </p>
                <p v-if="modalFilter.postUniversity3"> {{modalFilter.thirdGrade}} - {{modalFilter.postUniversity3}} </p>
              </div>
              <div class="container-fluid pdnb1 bckg2 txcolor2">
                <p> <strong class="txcolor2">Perfil:</strong> {{modalFilter.profile}} </p>
              </div>
              <div class="container-fluid pdnb1 bckg2 txcolor2">
                <p> <strong class="txcolor2">Manejo de Software:</strong> {{modalFilter.softwaredomain}} </p>
              </div>
              <div class="container-fluid pdnb1 bckg2 txcolor2">
                <p> <strong class="txcolor2">Experiencia:</strong>  {{modalFilter.experience}} </p>
              </div>
              <div class="container-fluid pdnb1 bckg2 has-text-centered">
                <p> <strong> Contacto: </strong> {{modalFilter.userEmail}} {{modalFilter.phone}} {{modalFilter.mobilePhone}} </p>
                <p> <strong> Ubicación: </strong> {{modalFilter.city}} - {{modalFilter.state}} - {{modalFilter.country}} </p>
              </div>
            </div>
            <div v-if="comments" class="comment container-fluid">
              <div class="">
                <div class="txtl ">
                  <a class="button is-small is-rounded" @click="addComment">
                    <span class="icon"> <i class="fas fa-user-plus"></i> </span>
                    <span>Añadir Comentario</span>
                  </a>
                </div>
                <form v-if="writeComment">
                  <textarea class="textarea is-info" type="text" v-model="commented"></textarea>
                  <a class="button is-info is-small" @click="saveComment">Publicar comentario</a>
                </form>
              </div>
              <div class="container-fluid bckg2 pdn2">
                <div v-for="(showcomment, j) in modalFilter.commented" :key="j">
                  <div class="commenterProfile">
                    <figure class="commenterPhoto">
                      <img :src="showcomment.userComentedPhoto" alt="User that comment">
                    </figure>
                    <p> {{showcomment.userComented}} </p>
                  </div>
                  <div class="container-fluid">
                    <p> {{showcomment.comments}} </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <vue-stars name="ranking" active-color="#00BBF0" inactive-color="#999999" shadow-color="#ffff00"
              hover-color="#005792" :max="5" :readonly="false" char="" inactive-char=""
              class="fa mgrnrg rspdsn" v-model="rating"></vue-stars>
            <div class="mgrnrg rspdsn"> Deseas calificar con {{rating}} estrellas a {{modalFilter.firstName}}? </div>
            <a class="button is-small is-success is-outlined is-rounded pdn5" @click="doRating">
              <span class="icon"> <i class="fas fa-check"></i> </span>
              <span></span>
            </a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { loadProfessionals, doRating, saveComment } from '@/services/save-users'
import VueStars from '@/components/utilities/VueStars'

export default {
  mounted () {
    this.loadProfessionals()
  },
  data () {
    return {
      profesionales: [],
      launch: false,
      userQ: '',
      rating: 0,
      profile: true,
      comments: false,
      writeComment: false,
      commented: null
    }
  },
  components: { VueStars },
  methods: {
    loadProfessionals,
    doRating,
    saveComment,
    doLaunch (i) {
      this.userQ = i
      this.launch = !this.launch
      // this.point()
    },
    addComment () {
      this.writeComment = !this.writeComment
    }
    // point () {
    //   let ptns = this.modalFilter
    //   console.log(ptns.map().reduce((prev, next) => prev + next))
    // }
  },
  computed: {
    ...mapState(['uid', 'users']),
    modalFilter () {
      return this.profesionales[this.userQ]
    },
    rank () {
      let ptns = this.modalFilter.rating
      let x = 0
      let l = 0
      for (let key in ptns) {
        let y = x + ptns[key]
        x = y
        l++
      }
      return x / l
    }
  }
}
</script>

<style lang="scss" scoped>
  .commenterProfile {
    display: flex;
    flex-direction: row;
  }
  .commenterPhoto {
    width: 40px;
    height: auto;
  }
  .commenterPhoto img {
    border-radius: 50%;
  }
  .comment {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  // .comment div {
  //   display: flex;
  //   flex-direction: column;
  // }
  .txtl {
    display: flex;
    justify-content: flex-end;
  }
  .tabs li.is-active a {
    color: #00BBF0;
  }
  .pdn2 {
    padding: 10px;
    border-radius: 8px;
  }
  .mgrnrg {
    margin-right: 15px;
  }
  .pdn5 {
    padding: 2px 7px 2px 15px;
  }
  .modal-card-head {
    flex-direction: column;
    padding: 12px;
  }
  .modal-card-body {
    padding-top: 0;
    background: url(../../../assets/vuebc3.jpeg) center / cover;
  }
  .firstData {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .secondData {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
  .sdimg {
    display: grid;
    width: 90%;
    justify-content: center;
  }
  .sdimg img {
    width: 100px;
    border-radius: 50%;
  }
  .delButton {
    display: flex;
    width: 10%;
    justify-content: flex-end;
  }
  .modal-background {
    background-color: rgba(10, 10, 10, .7) !important;
  }
  .bckg2 {
    background-color: rgba(241, 244, 246, 0.7);
  }
  // .txcolor {
  //   color: #005792;
  // }
  .txcolor2 {
    color: #00204A;
  }
  .pdnb1 {
    padding: 10px !important;
  }
  .pdnbody {
    padding: 0px 15px 10px 15px;
  }
  .image img {
    border-radius: 50%;
  }
  .cdb {
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 10px;
  }
  .bckg1 {
    background-color: #00204a;
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }
  .sbm {
    margin-bottom: 0;
  }
  .content p {
    margin-bottom: 6px;
  }
  .jft p {
    color: #f1f4f6;
  }
  .subtitle p {
    color: #005792;
  }
@media (max-width: 600px) {
  .rspdsn {
    font-size: 12px;
  }
  .rspdsn a {
    padding: 5px;
  }
  .modal-card-title {
    font-size: 20px;
  }
}
</style>
