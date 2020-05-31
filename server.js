const express = require('express')
const app = express()
const port = 3000 // different if want to put on heroku
path = require('path');


const api = require('./routes/api');
const html = require('./routes/html')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static("app/public"));
app.use('/api', api);
app.use('/', html);

// app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/index.html')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

