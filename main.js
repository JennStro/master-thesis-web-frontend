
var express = require('express')
var app = express()

const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('index.html'));
app.get('/ifstatement', (req, res) => res.render('ifstatement.html'));
app.get('/equalsoperator', (req, res) => res.render('equalsOp.html'));

app.listen(port, () => console.log(`Listening on ${ port }`));

