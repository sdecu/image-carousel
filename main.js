const menuItems = document.querySelectorAll('p');
const burgersvg = document.querySelector('.burgersvg');

burgersvg.addEventListener("click", (event) =>   {
    for (const item of menuItems) {
    item.classList.toggle('invisible')
}
})