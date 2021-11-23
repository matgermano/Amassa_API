const express = require ('express');

const app = express();



app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(3001, () => console.log('listening on http://localhost:3001'));