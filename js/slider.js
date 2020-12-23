//   PORTIFÓLIO SLIDER

// Declarando variáveis do slider

const sliderContainer = document.querySelector('.jl-slider-container')
const sliderList = document.querySelector('.jl-slider-list')
const sliderItem = document.querySelectorAll('.jl-slider-item')
var sliderListWidth = null

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

var prev = document.querySelector('.jl-item-prev')
var next = document.querySelector('.jl-item-next')
var sliderPos = 0


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
        translateX: sliderPos
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
        translateX: sliderPos
    })
}





next.addEventListener('click', function(){
    nextSliderAnim()
})

prev.addEventListener('click', function(){
    prevSliderAnim()
})