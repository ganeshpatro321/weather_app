const fetch = require('node-fetch');
const generateWebAppURL = require('server/utils').generateWebAppURL;

module.exports = (app) => {

  app.post('/search-location-weather', (req, res) => {
    const requestBody = req.body;
    // console.log(requestBody);
    const apiUrl = generateWebAppURL(requestBody.locationType, requestBody.locationData, requestBody.requestType);
    console.log(apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error:', err);
      });
  });
};
