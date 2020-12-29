//   PORTIFÓLIO SLIDER

// Declarando variáveis do slider
const sliderContainer = document.querySelector('.jl-slider-container')
const sliderList = document.querySelector('.jl-slider-list')
const sliderItem = document.querySelectorAll('.jl-slider-item')
var sliderListWidth = null

var prev = document.querySelector('.jl-item-prev')
var next = document.querySelector('.jl-item-next')
var sliderPos = 0

const slideTotalItems = sliderItem.length
var currentSlide = document.querySelector('.jl-current-slide')
var totalSlide = document.querySelector('.jl-total-slide')
var jlnumberslide = document.querySelector('.jl-number-slide')

var currentCounter = 1


var navItems = document.querySelectorAll('.jl-item-navigator a')

//capturando larguras indivíduais
var containerWidth = sliderContainer.parentElement.offsetWidth

//passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px'

for( var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth +'px'
    var sliderItemWidth = sliderItem[p].offsetWidth

    sliderListWidth += sliderItemWidth
    // console.log(sliderListWidth)
}

sliderList.style.width = sliderListWidth + 'px'

//fazendo animação deo Slider OnClick


// HANDLERS  

// Next slider animação
var nextSliderAnim = function(){
    var lastItem = sliderListWidth - containerWidth

    if ( -1*(sliderPos) === lastItem ){
        return
    }
    
    sliderPos -= containerWidth

    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    })

}

// Prev Slider Animação
var prevSliderAnim = function(){
    if ((sliderPos) === 0){
        return
    }

    sliderPos += containerWidth

    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    })
}


// Counter Formater
var counterFormater = function(n){
    if (n <= 9){
        return '0' + n
    }
    else {
        return n
    }
}

// Counter add
var counterAdd = function (){
    if(currentCounter >= 0 && currentCounter < slideTotalItems){
        currentCounter++
        currentSlide.innerHTML = counterFormater(currentCounter)
        jlnumberslide.innerHTML = counterFormater(currentCounter)
    }
}


// Counter Remove
var counterRemove = function(){
    if (currentCounter > 1  && currentCounter <= slideTotalItems){
        currentCounter--
        currentSlide.innerHTML = counterFormater(currentCounter)
        jlnumberslide.innerHTML = counterFormater(currentCounter)
    }
}

// SET ACTIVE NAV
var setActiveNav = function(){
    for (var nv = 0; nv < navItems.length; nv++){
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'))

        if (myNavNum === currentCounter){
            navItems[nv].classList.add('jl-item-active')

            anime({
                targets: navItems[nv],
                width: 90
            })
        }
    }
}


var setActiveSlider = function(){
    for (var sl = 0; sl < sliderItem.length; sl++){
        let mySlideNun = parseInt(sliderItem[sl].getAttribute('data-slide'))

        if (mySlideNun === currentCounter){
            sliderItem[sl].classList.add('jl-slide-active')
        }
    }
}

var changeActive = function(){
    for(var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('jl-item-active')
        anime({
            targets: navItems[rm],
            width: 20
        })
    }

    for(var rms = 0; rms < sliderItem.length; rms++){
        sliderItem[rms].classList.remove('jl-slide-active')
        anime({
            targets: sliderItem[rms],
            width: 20
        })
    }  

    setActiveNav()
    setActiveSlider()
}

// Actions
totalSlide.innerHTML = counterFormater(slideTotalItems)

anime({
    targets: ".jl-item-active",
    width: 90
})

next.addEventListener('click', function(){
    nextSliderAnim()
    counterAdd()
    changeActive()
})

prev.addEventListener('click', function(){
    prevSliderAnim()
    counterRemove()
    changeActive()
})