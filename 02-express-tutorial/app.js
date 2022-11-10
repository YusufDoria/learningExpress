const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('home');
})

app.get('/about', (req,res) => {
    res.send('about page');
})




app.listen(8000, () => {
    console.log('Server is up');
})