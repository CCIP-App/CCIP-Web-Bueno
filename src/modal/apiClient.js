import axios from 'axios'
var config = {
  baseURL: 'https://ccip.sitcon.org/',
  timeout: 3000
}

var client = axios.create(config)

export default {
  getStatus: (token) => {
    return client.get('/status?token=' + token)
  },
  useScenario: (scenario, token) => {
    return client.get('/use/' + scenario + '?token=' + token)
  },
  getAnnouncement: () => {
    return client.get('/announcement')
  }
}
