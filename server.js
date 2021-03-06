var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var counter=0;
var Pool=require('pg').Pool;
var config={
    user:'ajsarhisan',
    database:'ajsarhisan',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
    
};
var pool=new Pool(config);
app.get('/test-db',
    fuction(req,res)
    {
    //Make a select request
    //Return a response
        pool.query('SELECT * FROM test', 
        function(err,result)
            {
                if (err)
                    {
                             res.status(500).send(err.toString());
                    }
                else 
                    {
                          res.send(JSON.stringify(result));
                     }
             }
    });
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/counter', function(req,res){
   counter=counter+1;
   res.send(counter.toString()); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
