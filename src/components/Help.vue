<template>
  <div class="container-fluid bckg0">
    <div class="container mgrsp">
      <div class="hero bckg1">
        <div class="hero-body">
          <h1 class="title txcolor1 is-marginless">Hola <a class="txcolor2"> {{users.userName}} </a> </h1>
          <p class="title txcolor1">como podemos ayudarte?</p>
        </div>
        <div class="hero-foot">
          <div class="container-fluid">
            <nav class="tabs is-boxed cnt-1280 is-right bckfoot">
              <div class="container">
                <ul>
                  <li :class="{'is-active': platform}" @click="platform = true, train = false"><a class="txcolor2">
                    <span class="icon is-small"><i class="fa fa-rocket fa-lg" aria-hidden="true"></i></span>
                    <span class="txdim">Uso Plataforma</span>
                    </a></li>
                  <li :class="{'is-active': train}" @click="platform = false, train = true"><a class="txcolor2">
                    <span class="icon is-small"><i class="fa fa-angle-double-up fa-lg" aria-hidden="true"></i></span>
                    <span class="txdim">Entrenamiento</span>
                    </a> </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="container pdn">
      <h1 class="title tihp txcolor2">En esta sección encontrarás videos que te
        indican como usar la plataforma</h1>
      <h2 class="title is-1 has-text-centered has-text-danger">Esta sección se encuentra en construcción</h2>
      <div class="columns is-multiline">
        <div class="column box mgrl">
          <h1>Que servicios ofrecemos?</h1>
          <iframe class="video" width="400" height="280" src="https://www.youtube.com/embed/J1iD5I4lTVg"
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="column box">
          <h1>Sobre los procesos de contratación</h1>
          <iframe class="video" width="400" height="280" src="https://www.youtube.com/embed/J1iD5I4lTVg"
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="column box mgrr">
          <h1>Por qué tener tus datos actualizados?</h1>
          <iframe class="video" width="400" height="280" src="https://www.youtube.com/embed/J1iD5I4lTVg"
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <h2 class="title is-1 has-text-centered has-text-danger">
        En nuestra versión betha esperamos tener disponible esta sección
      </h2>
    </div>
    <div class="footer bckg2">
      <div class="content has-text-centered">
        <p class="title txcolor3">Hola, si tines alguna duda que no has resulto, escribeme a wilmercampagna@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'help',
  computed: mapState(['users']),
  data () {
    return {
      platform: true,
      train: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .tihp {
    display: flex;
    justify-content: center;
  }
  .video {
    width: 100%;
  }
  .pdn {
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .column {
    margin: 20px;
  }
  .mgrsp {
    margin-top: 52px;
  }
  .bckg0 {
    background-color: #f1f4f6;
  }
  .bckg1 {
    background-color: #00BBF0;
  }
  .bckg2 {
    background-color: #00204A;
  }
  .bckfoot {
    background-color: rgba(241, 244, 246, 0.7);
  }
  .txcolor1 {
    color: #F1F4F6;
    font-size: 40px;
  }
  .txcolor2 {
    color: #005792;
  }
  .txcolor3 {
    color: #f1f4f6;
    font-size: 20px;
  }
  .footer {
    padding: 40px;
  }
</style>
