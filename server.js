const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "public");

const app = express()
app.use(express.static(initial_path))

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
})