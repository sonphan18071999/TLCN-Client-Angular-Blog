//Install express server
const express = require('express');
const path = require('path');
var engine = require('consolidate');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/TLCN-Client-Angular-Blog'));
// app.use(express.static('./TLCN-Client-Angular-Blog/src'));
// app.use(express.static(__dirname+'TLCN-Client-Angular-Blog'))
// app.use(express.static(path.join(__dirname, 'TLCN-Client-Angular-Blog/src/')));

// app.set('view engine', 'html');
// app.engine('html', engines.mustache);
app.set('views', __dirname + '/src/');
app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.get('/index', function(req,res) {
    res.render('index.html');
});

// res.sendFile(path.join(__dirname+'/dist/TLCN-Client-Angular-Blog/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080)
