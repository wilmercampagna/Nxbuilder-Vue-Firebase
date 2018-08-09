<template>
  <div class="hero is-small">
    <div class="hero-body">
      <div class="avatar-container container is-hidden-mobile">
        <div class="profile-avatar">
          <a class="imcont">
            <img :src="users.userPhoto" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container-fluid">
        <nav class="tabs is-boxed cnt-1280 is-right bckfoot">
          <div class="container">
            <ul>
              <li :class="{'is-active': myDat}" @click="myDat = true, stat = false,
                proj = false, mas = false"><a class="tx520">
                <span class="icon is-small"><i class="fa fa-user-secret" aria-hidden="true"></i></span>
                <span class="txdim"> {{ $t('personalData') }} </span>
                </a></li>
              <li :class="{'is-active': stat}" @click="myDat = false, stat = true,
                proj = false, mas = false"><a class="tx520">
                <span class="icon is-small"><i class="fas fa-chart-area" aria-hidden="true"></i></span>
                <span class="txdim">{{ $t('statistics') }}</span>
                </a> </li>
              <li :class="{'is-active': proj}" @click="myDat = false, stat = false,
                proj = true, mas = false"> <a class="tx520">
                <span class="icon is-small"><i class="fa fa-database" aria-hidden="true"></i></span>
                <span class="txdim">{{ $t('projects') }}</span>
                </a> </li>
              <li :class="{'is-active': mas}" @click="myDat = false, stat = false,
                proj = false, mas = true"> <a class="tx520">
                <span class="icon is-small"><i class="fa fa-compress" aria-hidden="true"></i></span>
                <span class="txdim">{{ $t('mas') }}</span>
                </a> </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  computed: mapState(['users']),
  data () {
    return {
      myDat: true,
      stat: null,
      proj: null,
      mas: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .bckfoot {
    background-color: rgba(241, 244, 246, 0.7);
  }
  .hero {
    margin-bottom: 15px;
    background-image: url("https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-position: center center; background-repeat: no-repeat; background-attachment: fixed; background-size: cover;
    background-color: #999;
  }
  .hero-body {
    height: 175px;
    position: relative;
  }
  .hero-foot {
    padding-top: 30px;
  }
  .imcont {
    display: block;
  }
  .imcont img {
    border-radius: 50%;
    left: 0px;
    position: absolute;
    height: 100%;
    width: 100%px;
    top: 0px;
    z-index: 6;
  }
  .profile-avatar {
    display: block;
    height: 200px;
    width: 200px;
    border: 5px solid #F1F4F6;
    position: relative;
    border-radius: 50%;
  }
  .avatar-container {
    position: relative;
    display: flex;
    bottom: -50px;
  }
@media (max-width: 960px) {
  .cnt-1280 {
    display: block;
  }
}
@media (max-width: 720px) {
  .cnt-1280 {
    display: flex;
  }
}
@media (max-width: 520px) {
  .tx520 {
    display: grid;
    justify-items: center;
  }
  .txdim {
    font-size: 12px;
  }
}
</style>
