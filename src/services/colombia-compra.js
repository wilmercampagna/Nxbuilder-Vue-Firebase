import axios from 'axios'

import { firebase } from '@firebase/app'
import '@firebase/database'

import {newDate} from '@/services/dates'

let db = firebase.database()

function cargarLicitaciones (licitacionesdb) {
  this.licitacionesdb = []
  db.ref('/publicbuy/colombiacompra/licitaciones').limitToLast(400).on('value', (data) => {
    for (let key in data.val()) {
      this.licitacionesdb.push(data.val()[key])
    }
    this.licitacionesdb.reverse()
  })
}

function createLicitaciones (licitaciones, id) {
  db.ref('/publicbuy/colombiacompra/licitaciones')
    .child(id).set(licitaciones)
    .then(() => {
      // console.log('Licitacion Creada')
    })
}

let Dates = newDate()
let urlObra = {
  url1: `https://www.datos.gov.co/resource/c6dm-udt9.json?tipo_de_proceso=Licitación Pública&tipo_de_contrato=Obra&fecha_de_cargue_en_el_secop=${Dates.yesterday}`,
  url2: 'https://www.datos.gov.co/resource/c6dm-udt9.json?tipo_de_proceso=Licitación Pública&estado_del_proceso=Borrador&tipo_de_contrato=Obra&anno_cargue_secop=2018',
  url3: 'https://www.datos.gov.co/resource/c6dm-udt9.json?tipo_de_proceso=Licitación Pública&estado_del_proceso=Convocado&tipo_de_contrato=Obra&anno_cargue_secop=2018'
}

function llamarLicitaciones () {
  for (let url in urlObra) {
    axios.get(urlObra[url])
      .then((res) => {
        for (let process in res.data) {
          let licitaciones = []
          licitaciones.push({
            fechacargue: res.data[process].fecha_de_cargue_en_el_secop,
            estado: res.data[process].estado_del_proceso,
            urlprocess: res.data[process].ruta_proceso_en_secop_i,
            numprocess: res.data[process].numero_de_proceso,
            valor: res.data[process].cuantia_proceso,
            processid: res.data[process].numero_de_constancia,
            fuente: 'Secop I',
            // fuente: 'Secop II',
            entidad: res.data[process].nombre_de_la_entidad.toLowerCase(),

            objeto: res.data[process].detalle_del_objeto_a_contratar.toLowerCase().split(' ').map((p) => {
              if (p[0]) {
                return p[0].toUpperCase() + p.substr(1, p.length)
              }
            }).join(' ')
          })
          if (licitaciones) {
            createLicitaciones(licitaciones[0], licitaciones[0].processid)
          }
        }
        alert('Obras Secop I actualizadas')
      })
  }
}

function cargarObraSecopII (licitacionesdb) {
  this.licitacionesdb = []
  db.ref('/publicbuy/colombiacompra/ObraSecopII').orderByChild('fechacargue').limitToLast(400).on('value', (data) => {
    for (let key in data.val()) {
      this.licitacionesdb.push(data.val()[key])
    }
    this.licitacionesdb.reverse()
  })
}

function createObraII (licitaciones, id) {
  db.ref('/publicbuy/colombiacompra/ObraSecopII')
    .child(id).set(licitaciones)
    .then(() => {
      // console.log('consultoria Creada')
    })
}

let urlObraSII = {
  // url1: `https://www.datos.gov.co/resource/s3fx-gnq2.json?modalidad_de_contratacion=Licitación Pública&fase=Presentación de observaciones`
  url1: `https://www.datos.gov.co/resource/s3fx-gnq2.json?tipo_de_contrato=Obra&fase=Presentación de observaciones`
}

function llamarObraSecopII () {
  axios.get(urlObraSII.url1)
    .then((res) => {
      for (let process in res.data) {
        let licitaciones = []
        if (res.data[process].descripci_n_del_procedimiento) {
          licitaciones.push({
            fechacargue: res.data[process].fecha_de_publicacion_del_proceso,
            fase: res.data[process].fase,
            estado: res.data[process].estado_del_procedimiento,
            urlprocess: res.data[process].urlproceso,
            numprocess: res.data[process].referencia_del_proceso,
            valor: res.data[process].precio_base,
            processid: res.data[process].id_del_proceso.split('.').join('-'),
            fuente: 'secopII',
            entidad: res.data[process].entidad.toLowerCase(),
            // objeto: res.data[process].descripci_n_del_procedimiento
            objeto: res.data[process].descripci_n_del_procedimiento.toLowerCase().split(' ').map((p) => {
              if (p[0]) {
                return p[0].toUpperCase() + p.substr(1, p.length)
              }
            }).join(' ')
          })
          if (licitaciones) {
            // console.log(licitaciones[0].processid)
            createObraII(licitaciones[0], licitaciones[0].processid)
          }
        }
      }
      alert('Obras Secop II actualizadas')
    })
}

function cargarConsultorias (consultoriasdb) {
  this.consultoriasdb = []
  db.ref('/publicbuy/colombiacompra/consultorias').limitToLast(400).on('value', (data) => {
    for (let key in data.val()) {
      this.consultoriasdb.push(data.val()[key])
    }
    this.consultoriasdb.reverse()
  })
}

function createConsultorias (consultorias, id) {
  db.ref('/publicbuy/colombiacompra/consultorias')
    .child(id).set(consultorias)
    .then(() => {
      // console.log('consultoria Creada')
    })
}

let urlConsultorias = {
  url1: `https://www.datos.gov.co/resource/c6dm-udt9.json?tipo_de_proceso=Concurso de Méritos Abierto&fecha_de_cargue_en_el_secop=${Dates.yesterday}`,
  url2: 'https://www.datos.gov.co/resource/c6dm-udt9.json?tipo_de_proceso=Concurso de Méritos Abierto&estado_del_proceso=Borrador&anno_cargue_secop=2018',
  url3: 'https://www.datos.gov.co/resource/c6dm-udt9.json?tipo_de_proceso=Concurso de Méritos Abierto&estado_del_proceso=Convocado&anno_cargue_secop=2018'
}

function llamarConsultorias () {
  for (let url in urlConsultorias) {
    axios.get(urlConsultorias[url])
      .then((res) => {
        for (let process in res.data) {
          let consultorias = []
          consultorias.push({
            fechacargue: res.data[process].fecha_de_cargue_en_el_secop,
            estado: res.data[process].estado_del_proceso,
            urlprocess: res.data[process].ruta_proceso_en_secop_i,
            numprocess: res.data[process].numero_de_proceso,
            valor: res.data[process].cuantia_proceso,
            processid: res.data[process].numero_de_constancia,
            fuente: 'Secop I',
            entidad: res.data[process].nombre_de_la_entidad.toLowerCase(),

            objeto: res.data[process].detalle_del_objeto_a_contratar.toLowerCase().split(' ').map((p) => {
              if (p[0]) {
                return p[0].toUpperCase() + p.substr(1, p.length)
              }
            }).join(' ')
          })
          if (consultorias) {
            createConsultorias(consultorias[0], consultorias[0].processid)
          }
        }
        alert('Consultorias Secop I actualizadas')
      })
  }
}

function cargarConsultoriasII (consultoriasdb) {
  this.consultoriasdb = []
  db.ref('/publicbuy/colombiacompra/consultoriaSecopII').orderByChild('fechacargue').limitToLast(400).on('value', (data) => {
    for (let key in data.val()) {
      this.consultoriasdb.push(data.val()[key])
    }
    this.consultoriasdb.reverse()
  })
}

function createConsultoriasII (consultorias, id) {
  db.ref('/publicbuy/colombiacompra/consultoriaSecopII')
    .child(id).set(consultorias)
    .then(() => {
      // console.log('consultoria Creada')
    })
}

let urlConsultoriasSII = {
  url1: `https://www.datos.gov.co/resource/s3fx-gnq2.json?modalidad_de_contratacion=Concurso de méritos abierto&fase=Presentación de observaciones`
}

function llamarConsultoriasII () {
  axios.get(urlConsultoriasSII.url1)
    .then((res) => {
      for (let process in res.data) {
        let consultorias = []
        if (res.data[process].descripci_n_del_procedimiento) {
          consultorias.push({
            fechacargue: res.data[process].fecha_de_publicacion_del_proceso,
            fase: res.data[process].fase,
            estado: res.data[process].estado_del_procedimiento,
            urlprocess: res.data[process].urlproceso,
            numprocess: res.data[process].referencia_del_proceso,
            valor: res.data[process].precio_base,
            processid: res.data[process].id_del_proceso.split('.').join('-'),
            fuente: 'secopII',
            entidad: res.data[process].entidad.toLowerCase(),
            // objeto: res.data[process].descripci_n_del_procedimiento
            objeto: res.data[process].descripci_n_del_procedimiento.toLowerCase().split(' ').map((p) => {
              if (p[0]) {
                return p[0].toUpperCase() + p.substr(1, p.length)
              }
            }).join(' ')
          })
          if (consultorias) {
            // console.log(consultorias[0].processid)
            createConsultoriasII(consultorias[0], consultorias[0].processid)
          }
        }
      }
      alert('Consultorias Secop II actualizadas')
    })
}

export { llamarLicitaciones, llamarConsultorias, cargarConsultorias, cargarLicitaciones, llamarConsultoriasII, cargarConsultoriasII, llamarObraSecopII, cargarObraSecopII }
