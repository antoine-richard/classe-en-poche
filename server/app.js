var express = require('express')
  , morgan  = require('morgan')
  ,	favicon = require('serve-favicon')
  , app     = express()
  , port    = process.env.PORT || 3000;

app.use(morgan('short'));
app.use(favicon(__dirname + '/../client/src/images/favicon.ico'));

console.log('###');
console.log(process.env.NODE_ENV);
console.log('###');

if ('development' == process.env.NODE_ENV) {
  app.use(express.static('client/src'));
} else {
  app.use(express.static('client/dist'));
}

app.listen(port, function() {
  console.log('classe-en-poche server listening on port ' + port);
});