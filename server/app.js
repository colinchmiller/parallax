var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));
// || 5000 port setting needed for local hosting and testing

app.get('/*', function(req, res){
  var file = req.params[0] || 'assets/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function(){
  console.log("Application is running on port: ", + app.get('port'));
});
