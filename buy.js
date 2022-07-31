const buyBtns = document.querySelectorAll('.js-buy-car')
const mo = document.querySelector(('.js-mo'))
const mocontainer = document.querySelector(('.js-container'))
const moClose = document.querySelector(('.js-mo-close'))

// ham hien thi them class open va mo
function showBuycar() {
    mo.classList.add('open')
}
// ham an mo go bo class open cua mo

function hideBuycar() {
    mo.classList.remove('open')
}

// lap qua tung the button va nghe ham vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuycar)
}
// nghe pham vi click vao button close
moClose.addEventListener('click', hideBuycar)

mo.addEventListener('click', hideBuycar)

mocontainer.addEventListener('click', function (event) {
    event.stopPropagation()
})