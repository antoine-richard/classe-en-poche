var express = require('express')
  , morgan  = require('morgan')
  ,	favicon = require('serve-favicon')
  , app     = express()
  , port    = process.env.PORT || 3000;

app.use(morgan('short'));
app.use(favicon(__dirname + '/../client/src/images/favicon.ico'));

if ('production' == process.env.NODE_ENV) {
  app.use(express.static('client/dist'));
} else {
  app.use(express.static('client/src'));
}

app.listen(port, function() {
  console.log('classe-en-poche server listening on port ' + port);
});