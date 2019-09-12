const express = require('express');
const app = express();
// We create our own server named app
// Express server handling requests and responses
const app = express();
app.use(express.static('public'));


// our first Route
app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');
});


app.get('/cat', (request, response, next) => {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `);
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});