// hamberger

let hamberger = document.querySelector(".hamberger")
console.log(hamberger)
hamberger.addEventListener("click", function () {
    let ul_el = document.querySelector('#ul_block');
    ul_el.classList.toggle("-on");
})

let block = document.querySelector('.block')
console.log(block)