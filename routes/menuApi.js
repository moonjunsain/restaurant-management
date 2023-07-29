const menus = require('express').Router()
const Menu = require('../classes/menu')

const multer = require('multer')

const fs = require('fs/promises')

// should be able to display all the menus from the data base 
    // read data from the data base
    // return the json form
menus.get('/menus', async (req, res) => {
    const data = await fs.readFile('./db/menus.json')
    const parsedData = JSON.parse(data)
    res.json(parsedData)
})

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'db/images')
    },
    filename: function(req, file, cb){
        cb(null, "Menu-" + file.originalname)
    }
});

const upload = multer({storage: storage})

// should be able to post a new menu
menus.post('/menus', upload.single('file'), async (req, res) => {
    console.info(`${req.method} request received to add a menu`);
    const {menuName, price} = req.body
    if(menuName && price && req.file){
        const newMenu = new Menu(menuName, price, req.file.filename)
        const data = await fs.readFile('./db/menus.json')
        const parsedData = JSON.parse(data)
        parsedData.push(newMenu)
        await fs.writeFile('./db/menus.json', JSON.stringify(parsedData, null, 4))
        res.json(parsedData)
    }else {
        res.status(400).json({error: 'Invalid menu data'})
    }

})


// should be able to delete any existing post

module.exports = menus
