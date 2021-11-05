const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan('dev'));

app.get('/', (req,res)=>{
res.status(200).json({msg:'hello world', status: {msg: 'ok'} });
});


app.set('port',process.env.PORT||3000);


app.listen(app.get('port'),()=>{
  	console.log('server on DOCKER and PORT', app.get('port'));
}) ;
