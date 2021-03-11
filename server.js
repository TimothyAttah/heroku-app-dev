const express = require( 'express' );
const cors = require( 'cors' );

const app = express();

app.use( cors() );

app.get( '/', ( req, res ) => {
  res.send( 'Hello Beautiful world, how are you!!!' )
} );

app.get( '/home', ( req, res ) => {
  res.send('This is home page')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))