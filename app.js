const express = require('express');
const {config, engine} = require('express-edge');
var app = express();
const bodyParser = require('body-parser')
var upload = require('express-fileupload');

const Files  = require('./Routes/files');
const Uploads =  require('./Routes/uploads');
const Downloads = require('./Routes/download');
const Index = require('./Routes/index');

const mv = require('mv');

const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(upload());
app.use(express.static('./public'));
app.use(engine);
app.set('views', __dirname + '/views');

app.use(Index)
app.use('/Files', Files);
app.use('/uploads', Uploads.router);
app.use('/download', Downloads);


app.listen(port, ()=>{
   console.log('listening on port ' + port)
})