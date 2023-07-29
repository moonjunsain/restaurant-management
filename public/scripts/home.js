const menuForm = document.getElementById('menuForm')

menuForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const menuName = menuForm.menuName.value
    const price = menuForm.price.value
    const imgFile = menuForm.img.files[0]

    const formData = new FormData()
    formData.append('menuName', menuName)
    formData.append('price', price)
    formData.append('imgFile', imgFile)

    fetch('/menus', {
        method: 'POST',
        body: formData
    }).then((response) => {
        return response.json
    }).then(data => {
        console.log('uploaded success', data)
    }).catch(err => {
        console.error("Error uploading", err)
    })
})