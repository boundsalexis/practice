const express = require('express')
const app = express()
const port = 3000
path = require('path');

// express.json(true);
app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/index.html')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

