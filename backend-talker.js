const API_LOCATION = 'https://barnonesexyapi.herokuapp.com/';
import {checkPermission} from 'react-native-android-permissions';

export function getOwnLatitudeAndLongitude(callback) {
  checkPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {

      navigator.geolocation.getCurrentPosition(data => {
          callback(data)
      }, err => {
        console.error(err)
      })

    }, (result) => {
      console.error(result);
    });

    navigator.geolocation.watchPosition(pos => {
      callback(pos)
    })
}

export function api(query, callback) {
  return fetch(API_LOCATION + query)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .done();
}

export function addReview(id, hash, callback) {
  hash.rating = hash.rating || 50
  hash.crowdedness = hash.crowdedness || 50
  hash.loudness = hash.loudness || 50

  fetch(API_LOCATION + `/bars/review/${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rating: hash.rating,
      crowdedness: hash.crowdedness,
      loudness: hash.loudness,
    })
  })
  .then((data) => {
    callback(data)
  })
  .catch(error => {
    console.error(error)
  })
  .done();
}

export function increaseCount(latitude, longitude) {
  latitude = latitude || 0
  longitude = longitude || 0

  fetch(`${API_LOCATION}/bars/update-count`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  })
  .catch(error => {
    console.error(error)
  })
  .done();
}

export function barsFromLocation(latitude, longitude, callback) {
  api(`bars?latitude=${latitude}&longitude=${longitude}`, (data) => {
    callback(data.bars);
  });
}

export default { barsFromLocation, api, addReview, increaseCount };
