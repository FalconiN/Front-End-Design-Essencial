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



// MODAL 

const toggleModal = document.querySelectorAll('.jl-toggle-modal')

//abrindo e fechando o modal de orçamento

for(var i = 0; i < toggleModal.length; i++ ) {
    toggleModal[i].addEventListener('click', function() {
        var overlay = document.querySelector('.jl-overlay')
        var modalOrcamento = document.querySelector('#jl-modal-orcamento')

        overlay.classList.toggle('jl-is-open')
        modalOrcamento.classList.toggle('jl-is-open')
        modalOrcamento.classList.toggle('jl-slide-top-in')
        
    })
}


// WAYPOINTS - Animnado elementos on scroll
var myScrollDown = document.querySelector('.jl-scroll') 

var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
      myScrollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%'
  })


