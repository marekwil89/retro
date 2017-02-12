$( document ).ready(function() {

  var currentSlide = $('figure.slide').filter('.active')

  $('.arrow.right').on("click", nextSlide)
  $('.arrow.left').on("click", prevSlide)

  function nextSlide(){
    var nextSlide = currentSlide.next()
    currentSlide.removeClass('active')
    if(nextSlide.length){
      currentSlide = nextSlide.addClass('active')
    }
    else{
      currentSlide = $('figure.slide').first().addClass('active')
    }    
  }

  function prevSlide(){
    var prevSlide = currentSlide.prev()
    currentSlide.removeClass('active')
    console.log(prevSlide.index('.slide'))
    if(prevSlide.index('.slide') >= 0){
      currentSlide = prevSlide.addClass('active')
    }
    else{
      currentSlide = $('figure.slide').last().addClass('active')
    }    
  }


});