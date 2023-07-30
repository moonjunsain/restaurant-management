const {v4: uuid} = require('uuid')
class Menu {
    constructor(menuName, price, img){
        this.menuName = menuName
        this.price = price
        this.img = img
        this.id = uuid()
    }
}

module.exports = Menu