const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.send('hello')
  
});

app.post('/api/notes', (req, res) => {
    console.log(req.body)
    res.json(req.body)
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

});

