$(document).ready(function() {
    
    /* FOR THE BACKGROUND-COLOR CHANGE ON CLICK */

    /*$('h1').click(function() {
        $(this).css('background-color', 'orange');
    })*/


    /* FOR THE STICKY NAVIGATION */

    $('.js--section-features').waypoint(function(direction) {

        if (direction == "down") 
        {
            $('nav').addClass('sticky');
        }
        else
        {
            $('nav').removeClass('sticky');
        }

    },
    {
        offset: '5%'
    });

    /* FOR THE SCROLL ON BUTOON CLICK */

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    //CODE TAKEN FROM https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  /* ANIMATIONS ON SCROLL */

  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated wobble');
  }, {
      offset: '50%'
  });
    
  $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated swing');
  }, {
      offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated tada');
  }, {
      offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated bounceInDown');
  }, {
      offset: '50%'
  });

  $('.js--wp-5').waypoint(function(direction) {
      $('.js--wp-5').addClass('animated swing');
  }, {
      offset: '50%'
  });

  $('.js--wp-6').waypoint(function(direction) {
      $('.js--wp-6').addClass('animated swing');
  }, {
      offset: '50%'
  });

});