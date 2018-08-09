import axios from 'axios'

function info () {
  axios.get('http://obiee.banrep.gov.co/analytics/saw.dll?wsdl')
    .then((res) => {
      return console.log(res)
    })
}

export { info }
