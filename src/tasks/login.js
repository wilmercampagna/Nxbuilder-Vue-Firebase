import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'

let db = firebase.database()
let user = {}

function createUser (user, uid) {
  db.ref(`/users/${uid}`).on('value', (data) => {
    if (!data.val()) {
      db.ref('/users/')
        .child(uid).set(user)
        .then(() => {
          console.log('Usuario Creado')
        })
    } else {
      console.log('usuario ya existe')
    }
  })
}

function signIn () {
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
    (result) => {
      let user = {
        userName: this.userName,
        userEmail: result.user.email,
        isSuperAdmin: false,
        userId: result.user.uid,
        userPhoto: 'https://firebasestorage.googleapis.com/v0/b/lambda-app-f0ea4.appspot.com/o/NxBuilderFiles%2FavatarImg%2Fprofile.png?alt=media&token=ee794a98-5adf-4df8-abf6-e9b3f7541e07'
      }
      createUser(user, user.userId)
      this.$router.replace('home')
    },
    function (err) {
      alert('Ops' + err.message)
    }
  )
}

function emailAuth () {
  firebase.auth().signInWithEmailAndPassword(this.userName, this.email, this.password).then(
    (result) => {
      this.$router.replace('home')
    },
    function (err) {
      alert('Ops' + err.message)
    }
  )
}

function googleAuth () {
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  firebase.auth().useDeviceLanguage()
  firebase.auth().signInWithPopup(provider).then(
    (result) => {
      user = {
        userName: result.user.displayName,
        userEmail: result.user.email,
        userPhoto: result.user.photoURL,
        userId: result.user.uid
      }
      createUser(user, user.userId)
      this.$router.replace('home')
    }
  ).catch((error) => {
    alert('Ops' + error.code)
    alert('Ops' + error.message)
    alert('Ops' + error.email)
    alert('Ops' + error.credential)
  })
}

function facebookAuth () {
  const provider = new firebase.auth.FacebookAuthProvider()
  provider.addScope('public_profile')
  firebase.auth().useDeviceLanguage()
  firebase.auth().signInWithPopup(provider).then(
    (result) => {
      user = {
        userName: result.user.displayName,
        userEmail: result.user.email,
        userPhoto: result.user.photoURL,
        userId: result.user.uid
      }
      createUser(user, user.userId)
      this.$router.replace('home')
    }
  ).catch((error) => {
    alert('Ops' + error.code)
    alert('Ops' + error.message)
    alert('Ops' + error.email)
    alert('Ops' + error.credential)
  })
}

function twitterAuth () {
  const provider = new firebase.auth.TwitterAuthProvider()
  firebase.auth().useDeviceLanguage()
  firebase.auth().signInWithPopup(provider).then(
    (result) => {
      user = {
        userName: result.user.displayName,
        userEmail: result.user.email,
        userPhoto: result.user.photoURL,
        userId: result.user.uid
      }
      createUser(user, user.userId)
      this.$router.replace('home')
    }
  ).catch((error) => {
    alert('Ops' + error.code)
    alert('Ops' + error.message)
    alert('Ops' + error.email)
    alert('Ops' + error.credential)
  })
}

function logOut () {
  firebase.auth().signOut().then(() => {
    this.$router.replace('login')
  })
}

export {emailAuth, facebookAuth, googleAuth, twitterAuth, logOut, signIn}
