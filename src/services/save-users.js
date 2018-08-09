import { firebase } from '@firebase/app'
import '@firebase/database'

let db = firebase.database()

function saveUser () {
  for (let key in this.formulario) {
    if (this.formulario[key]) {
      db.ref('/users/').child(this.uid).child(key).set(this.formulario[key])
    }
  }
}

function saveSettings () {
  for (let key in this.settings) {
    if (this.settings[key] !== null) {
      db.ref('/users/').child(this.uid).child(key).set(this.settings[key])
      alert('Preferencias de usuario guardadas')
    }
  }
}

function loadProfessionals () {
  this.profesionales = []
  db.ref('/users').on('value', (data) => {
    for (let key in data.val()) {
      this.profesionales.push(data.val()[key])
    }
  })
}

function doRating () {
  db.ref('/users').child(this.modalFilter.userId).child('rating').child(this.uid).set(this.rating)
  alert('Calificación exitosa')
}

function saveComment () {
  db.ref('/users').child(this.modalFilter.userId).child('commented').push({
    comments: this.commented,
    userComented: this.users.userName,
    userComentedPhoto: this.users.userPhoto
  })
  this.addComment()
  alert('Comentario agregado satisfactoriamente')
}

export {saveUser, loadProfessionals, saveSettings, doRating, saveComment}
