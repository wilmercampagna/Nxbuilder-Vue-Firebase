import firebase from 'firebase/app'

let config = {
  apiKey: 'AIzaSyDZcwCV5jr5VxJZbI-y8isnDeM29eg494c',
  authDomain: 'lambda-app-f0ea4.firebaseapp.com',
  databaseURL: 'https://lambda-app-f0ea4.firebaseio.com',
  projectId: 'lambda-app-f0ea4',
  storageBucket: 'lambda-app-f0ea4.appspot.com',
  messagingSenderId: '386147959021'
}

firebase.initializeApp(config)
