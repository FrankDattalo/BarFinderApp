const API_LOCATION = 'https://barnonesexyapi.herokuapp.com/';

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

export function barsFromLocation(latitude, longitude, callback) {
  api(`bars?latitude=${latitude}&longitude=${longitude}`, (data) => {
    callback(data.bars);
  });
}

export default { barsFromLocation, api };
