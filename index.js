const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World! First ever Digital Ocean App using NodeJS Express.');
})

app.listen(port, () => {
    console.log(`DigitalOcean app running on ${port}`)
});