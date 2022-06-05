const express = require('express'); // 
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const Route = require('./post.route');



// Connect to Mongoose with error handling 
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);
// Set the port  for the server 
app.set('port', (process.env.PORT || 4000)); 
// support encoded bodies middleware for the application
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 
// add cors to the application to allow calls from other domain
app.use(cors()); 
// add the route to the application
app.use('/posts', Route); 
// listen to the port
app.listen(app.get('port'), function(){ 
  console.log('Server is running on port: ', app.get('port'));
});


