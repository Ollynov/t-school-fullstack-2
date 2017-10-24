var axios = require('axios')
var weather_api_key = ''

module.exports = {
  getLocation: function (query) {
    let getLocationUrl = 'http://autocomplete.wunderground.com/aq'
    let params = {
      query: query
    }
    return axios.get(getLocationUrl, { params }).then((response) => {
      return response.data.RESULTS
    })
  },
  getForecast: function (city) {
    var url = 'https://api.wunderground.com/api/' + weather_api_key + '/conditions' + city.l + '.json'
    return axios.get(url).then((response) => {
      return response.data.current_observation
    })
  }
}
