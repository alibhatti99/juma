var jwt = require('jwt-simple');



// export entire function to server.js
module.exports = function(app) {
  app.get('/api/test', function(req, res) {
    res.json('yeee boiii it works!');
    console.log('server side got hit up!')
  })
};