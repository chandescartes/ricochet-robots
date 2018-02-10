const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use('/', express.static(__dirname + '/'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/');

app.get('/', (req, res) => {
  res.render('index.html');
});

const server = app.listen(7890, () => {
  const { port } = server.address();

  console.log('Example app listening at port %s', port);
});
