const axios = require('axios');
axios.get('https://catfact.ninja/fact')
  .then(function (response) {
    // handle success
    console.log(response.data.fact);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });