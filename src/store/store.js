import Vue from 'vue'
import Vuex from 'vuex'
import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'

import {} from '@/tasks/initFirebase'

import {llamarLicitaciones, llamarConsultorias, llamarConsultoriasII, llamarObraSecopII} from '@/services/colombia-compra'
import {logOut} from '@/tasks/login'

let db = firebase.database()

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    search: '',
    uid: '',
    users: {}
  },
  mutations: {
    updateSearch (state, search) {
      state.search = search
    },
    loadProfile (state) {
      firebase.auth().onAuthStateChanged((user) => {
        this.state.uid = user.uid
        db.ref('users').child(this.state.uid).on('value', (data) => {
          this.state.users = data.val()
        })
      })
    },
    logOut,
    secopI () {
      llamarLicitaciones()
      llamarConsultorias()
    },
    secopII () {
      llamarConsultoriasII()
      llamarObraSecopII()
    }
  },
  actions: {
    commitProfile (context) {
      context.commit('loadProfile')
    },
    loadProcess (context) {
      context.commit('secopI')
    },
    loadProcessII (context) {
      context.commit('secopII')
    },
    commitLogOut (context) {
      context.commit(logOut())
    }
  }
})
