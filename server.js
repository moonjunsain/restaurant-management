const express = require('express')
const app = express()
const path = require('path')
const api = require('./routes/menuApi')

const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', api)

app.use(express.static('public'))

// directs the user to menu page
app.get('/menus', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/menus.html'))
})



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });