document.querySelectorAll('.burger').forEach(item =>{
    item.addEventListener('click', function(){
        document.querySelector('.navigation').classList.toggle('active');
    })
})

let buttons = document.querySelectorAll('.nav-item');
let blocks = document.querySelectorAll('.scroll');

buttons.forEach((button, index) => {
    button.addEventListener('click', function(){
        blocks[index].scrollIntoView(
            {
                block: 'start',
                behavior: 'smooth',
            }
        );
    })
})

let nav = document.querySelector('.navigation');
let body = document.body;

window.addEventListener('scroll', function(){
    if (window.pageYOffset < 100){
        nav.classList.remove('fixed');
    } else {
        nav.classList.add('fixed');
    }
})

