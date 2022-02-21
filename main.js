
var express = require('express')
var app = express()

const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('index.html'));
app.get('/ifstatement', (req, res) => res.render('ifstatement.html'));
app.get('/equalsoperator', (req, res) => res.render('equalsOp.html'));
app.get('/semicolon', (req, res) => res.render('semiAfterIf.html'));
app.get('/bitwiseoperator', (req, res) => res.render('bitwiseoperator.html'));
app.get('/integerdivision', (req, res) => res.render('integerdivision.html'));
app.get('/firstTask', (req, res) => res.render('firstTask.html'));

app.listen(port, () => console.log(`Listening on ${ port }`));

