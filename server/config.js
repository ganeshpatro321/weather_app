module.exports = {
  baseUrl: {
    protocol: 'http',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather',
  },

  query: {
    name: 'q',
    id: 'id',
    coordinates: {
      latitude: 'lat',
      longitude: 'lon',
    },
    zipcode: 'zip',
  },

  APIkey: 'ae41a5d841121f6fe0cfb9bb9e63e68d',
};
