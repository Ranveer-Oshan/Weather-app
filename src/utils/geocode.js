const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +  address + '.json?access_token=pk.eyJ1IjoicmFudmlpNyIsImEiOiJja2U5eG4xM2YwNTY3MnluejhoMnV3eG83In0.XfqmX4GPU1VZoG-FVLxenQ'

    request({url, json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode