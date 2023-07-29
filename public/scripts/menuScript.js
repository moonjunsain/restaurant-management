const itemListNav = document.getElementById('item-list-nav')
const itemListEl = document.getElementById('listItems')

const makeListNav = (itemName) => {
    const newItem = document.createElement('a')
    newItem.classList.add('nav-link')
    newItem.setAttribute('href', `#${itemName}`)
    itemListNav.appendChild(newItem)
}

const makeListEl = (itemName, price, imgName) => {
    const newItem = document.createElement('div')
    newItem.setAttribute('id', itemName)

    const hEl = document.createElement('h4')
    hEl.textContent = itemName

    const pEl = document.createElement('p')
    pEl.textContent = '$ ' + price

    const imgEl = document.createElement('img')
    imgEl.src = '../../db/images/' + imgName

    newItem.appendChild(hEl)
    newItem.appendChild(pEl)
    newItem.appendChild(imgEl)
    itemListEl.appendChild(newItem)
}