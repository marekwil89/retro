$( document ).ready(function() {

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    resizeLogo(wScroll)
  });

  function resizeLogo(wScroll){
    if(wScroll > 0){
      $('.logo-box img').addClass('resize')
    }
    else{
      $('.logo-box img').removeClass('resize')
    }
  }

  function anchorScroll(){
    $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      var target=$(this.hash);
      
      target = target.length ? target:$('[name='+this.hash.slice(1)+']');
      
      if(target.length){$('html, body').animate({
        scrollTop:target.offset().top - 60
      },1000);

        return false;
      }}
    });
  }

  resizeLogo();
  anchorScroll()
})