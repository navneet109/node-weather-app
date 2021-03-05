

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=958f5a055d51380f3e51db5566c7b385&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error,  {body} ) => {
        if (error) {
            callback(url, undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast

