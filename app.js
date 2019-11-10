/* importar as configurações do servidor */
var app = require('./config/server');

var PORT = process.env.PORT || 80

/* parametrizar a porta de escuta */
app.listen(PORT, function(){
	console.log('Servidor online');
})

app.get('/', function(req, res){
    res.send(process.env.VARS)
})
require('dotenv').config()

console.log(process.env.MODEL)
