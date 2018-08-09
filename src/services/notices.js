import { firebase } from '@firebase/app'
import '@firebase/database'

import {newDate} from '@/services/dates'

let db = firebase.database()
let dates = newDate()

function saveNotice () {
  db.ref('/notices/').push({
    title: this.notices.title,
    urlImg: this.notices.urlImg,
    notices: this.notices.notices,
    urlNotices: this.notices.urlNotices,
    root: this.notices.root,
    fecha: dates.today
  })
  alert('Noticia creada')
  this.notices = []
}

function loadNotices (noticesdb) {
  this.noticesdb = []
  db.ref('/notices').limitToLast(20).on('value', (data) => {
    for (let key in data.val()) {
      this.noticesdb.push(data.val()[key])
    }
    this.noticesdb.reverse()
  })
}

export {saveNotice, loadNotices}
