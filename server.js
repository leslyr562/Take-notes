const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3002;

const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));



app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/api/notes', (req, res) => {

    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.get('/api/notes', (req, res) => {

    res.sendFile(path.join(__dirname, "/../public/notes.html"))
})

app.get('/api/notes', (req, res) => {
    res.send(data);

});

app.get('api/notes/:id', (req, res) => {
    res.json(data[Number(req.params.id)]);
});


app.post('/api/notes', (req, res) => {
    let newNote = req.body
    console.log(newNote)
    let noteId = (data.length).toString();
    console.log(noteId)
    newNote.id = noteId
    data.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), err => {
        if (err) {
            console.log(err)
        }
        console.log("Note submitted")
    });

    res.json(newNote)
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

});

