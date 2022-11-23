//Просто делал
let g = document.querySelector('.item').classList.add('img')
let h = document.querySelector('.img').nextElementSibling.classList.add('text_help_js')
//Селекчу
let gg = document.querySelector('.dollar_text')
let ho = document.querySelector('.one')
let hoho = document.querySelector('.two')
let hohoho = document.querySelector('.three')
let hohohoho = document.querySelector('.four')
let bl = document.querySelector('.blue_text')
//часть с картинками
let img = document.querySelector('.img')
let vv_1 = document.querySelector('.vt_1')
let vv_2 = document.querySelector('.vt_2')
//Начинаем !
function rem(btn) {
    setTimeout(()=>{
        btn.classList.remove('border')
    }, 300)
}
ho.onclick = () => {
    setTimeout(()=>{
        gg.innerHTML = '$1,999'
        ho.classList.add('border')
    }, 300)
    rem(hoho)
    rem(hohoho)
    rem(hohohoho)
}
hoho.onclick = () => {
    setTimeout(()=>{
        gg.innerHTML = '$2,199'
        hoho.classList.add('border')
    }, 300)
    rem(ho)
    rem(hohoho)
    rem(hohohoho)
}
hohoho.onclick = () => {
    setTimeout(()=>{
        gg.innerHTML = '$2,599'
        hohoho.classList.add('border')
    }, 300)
    rem(ho)
    rem(hoho)
    rem(hohohoho)
}
hohohoho.onclick = () => {
    setTimeout(()=>{
        gg.innerHTML = '$3,199'
        hohohoho.classList.add('border')
    }, 300)
    rem(ho)
    rem(hoho)
    rem(hohoho)
}
//Часть с картинками
vv_1.onclick = () =>{
    img.classList.remove('img_2')
    vv_1.classList.add('blue_bc')
    vv_2.classList.remove('blue_bc')
    bl.innerHTML = 'White'
}
vv_2.onclick = () =>{
    img.classList.add('img_2')
    vv_2.classList.add('blue_bc')
    vv_1.classList.remove('blue_bc')
    bl.innerHTML = 'Space Grey'
}
