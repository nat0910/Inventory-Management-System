const express    = require('express');
const exphbs     = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql      = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static('public'));

app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine','hbs');

const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PWD,
    database        : process.env.DB_NAME
});

pool.getConnection((err,connection) =>{
    if(err) throw err;
    console.log('Connected as ID ' + connection.threadId);
});

const routes = require('./server/routes/inv');
app.use('/',routes);

app.listen(port,() => console.log(`Listen on port ${port}`))