	
	
  /*SMOOTH SCROLLING*/
    $(document).ready(function() {

        var scrollLink = $('.scroll');

        scrollLink.click(function(e) {
          e.preventDefault();
          $('body,html').animate({
            scrollTop: $(this.hash).offset().top
          }, 1000 );
        });

        //Active link switching
        $(window).scroll(function(){
          var scrollbarLocation = $(this).scrollTop();

          scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top

            if ( sectionOffset <= scrollbarLocation ) {
              $(this).parent().addClass('active');
              $(this).parent().siblings().removeClass('active');
            }
          })

        })

    })



/*RESPONSIVE NAVBAR*/
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('ul').toggleClass('active')
  })
})


/*PARALLAX SCROLL FIRST BACKGROUND*/
$(window).scroll(function(){
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position','center '+(wScroll*0.75)+'px')
  /*PARALLAX SCROLL ABOUT ME BOX*/

  $('.parallax--box').css('top', -9.4+(wScroll*0.015)+'em')
}



/*NAVBAR SCROLL DARK*/
	$(window).on('scroll', function(){
  		if($(window).scrollTop()){
  			$('nav').addClass('black');
  		}
  		else
  		{
  			$('nav').removeClass('black');
  		}
  	})




/*FLY HELLO*/
  	$(function() {

  		setTimeout(function() {
  			$('.fly-in-text').removeClass('hidden');
  		}, 400);

  	})();



