var express = require('express')
	, morgan  = require('morgan')
	,	favicon = require('serve-favicon')
  , app     = express()
  , port    = process.env.PORT || 3000;

app.use(morgan({ format: 'dev', immediate: true }));
app.use(favicon(__dirname + '/../client/images/favicon.ico'));

app.use(express.static('client'));

app.listen(port, function() {
  console.log('classe-en-poche server listening on port ' + port);
});