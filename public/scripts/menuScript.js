const itemListNav = document.getElementById('item-list-nav')
const itemListEl = document.getElementById('listItems')

const makeListNav = (itemName) => {
    const newItem = document.createElement('a')
    newItem.classList.add('nav-link')
    newItem.classList.add('active')
    newItem.setAttribute('href', `#${itemName}`)
    newItem.textContent = itemName
    itemListNav.appendChild(newItem)
}

const makeListEl = (itemName, price, imgName, itemId) => {
    const newItem = document.createElement('div')
    newItem.setAttribute('id', itemName)
    newItem.dataset.itemId = itemId

    const hEl = document.createElement('h4')
    hEl.textContent = itemName

    const pEl = document.createElement('p')
    pEl.textContent = '$ ' + price

    const imgEl = document.createElement('img')
    imgEl.src = './images/' + imgName

    newItem.appendChild(hEl)
    newItem.appendChild(pEl)
    newItem.appendChild(imgEl)
    itemListEl.appendChild(newItem)
}

const getItems = () => {
    fetch('/api/menus', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    }).then((response) => response.json())
    .then(function (data){
        for(let i = 0; i < data.length; i++){
            const {menuName, price, img, id} = data[i]
            makeListEl(menuName, price, img, id)
            makeListNav(menuName)
        }
    }).catch(err => {
        console.log("Error", err)
    })
}

getItems()

