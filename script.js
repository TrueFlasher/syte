let nav = document.querySelector('.navigation');

document.querySelectorAll('.burger').forEach(item =>{
    item.addEventListener('click', function(){
       nav.classList.toggle('active');
    })
})

window.addEventListener('scroll', function(){
    if (window.pageYOffset < 100){
        nav.classList.remove('fixed');
    } else {
        nav.classList.add('fixed');
    }
})
