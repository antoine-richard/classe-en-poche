var express = require('express')
  , morgan  = require('morgan')
  ,	favicon = require('serve-favicon')
  , app     = express()
  , port    = process.env.PORT || 3000;

app.use(morgan('short'));

if ('development' == process.env.NODE_ENV) {
  app.use(express.static('client/src'));
  app.use(favicon(__dirname + '/../client/src/images/favicon.ico'));
} else {
  app.use(express.static('client/dist'));
  app.use(favicon(__dirname + '/../client/dist/images/favicon.ico'));
}

app.listen(port, function() {
  console.log('classe-en-poche server listening on port ' + port);
});