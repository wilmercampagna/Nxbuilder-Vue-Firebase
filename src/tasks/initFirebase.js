import firebase from 'firebase/app'

let config = {
  apiKey: 'XXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXXXXXX',
  databaseURL: 'XXXXXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXX'
}

firebase.initializeApp(config)
