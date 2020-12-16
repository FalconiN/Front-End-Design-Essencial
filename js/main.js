// Pegando classe do css
const btnContact = document.querySelector('.jl-btn-contact')

//Page Preloader
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector('.jl-preloader')

    // setTimeout(function(){
        pagePreloader.classList.add('jl-fade-out')
    // }, 4000)

    setTimeout(function(){
        pagePreloader.style.display = "none";
    }, 2000)
})


// Botão contato/ Tela inicial
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info')

    boxContact.classList.toggle('jl-is-open')

    this.classList.toggle('jl-change-icon')
})



