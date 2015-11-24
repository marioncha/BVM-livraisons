$(document).ready(function(){
       $("html").removeClass("no-js").addClass("js");
       //$(".needjs").hide();




// Les autres sites de Montesquieu ===========================
    

    $( ".slide").click(function ( event ){
        if ( $( "#externe" ).is( ":hidden" ) ) {
             $( "#externe" ).slideDown( 400 )
             $( ".slide div" ).removeClass("haut")
             $( ".slide div" ).addClass("bas")

         
         }
        else {$( "#externe" ).slideUp( 300)
              $( ".slide div" ).removeClass("bas")
              $( ".slide div" ).addClass("haut")
         }
    });

// Les parties d'article qui se referment
    $( ".open" ).click(function() {
      $( this ).next().slideToggle( "slow", "swing", function() {
         if ( $( this ).is( ":hidden" ) ) {
            $(this).prev().addClass('plus'); 
         }
         else {
            $(this).prev().removeClass('plus');
         }
      });
    });

// Les parties du nav qui se referment
    $( "button" ).click(function() {
      $( this ).next("ul").slideToggle( 300, "swing", function() {
         if ( $( this ).is( ":hidden" ) ) {
            $(this).prev().addClass('plus'); 
         }
         else {
            $(this).prev().removeClass('plus');
         }
      });
    });
 
   //Pour afficher le bouton 
    var offset = 120;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
// Smooth scroll to top
     $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top
                }, 500);
            return false;
            }
        }
    });
});

// masquer-afficher les ajouts éditoriaux

$('.toggleEd').click(function() {

    $( ".editeur" ).toggle( "fast" );

    if ($(this).text() === 'Afficher les ajouts éditoriaux') {
        $(this).html('Masquer les ajouts éditoriaux');
    }
    else {
        $(this).html('Afficher les ajouts éditoriaux');
    }
});

/*

// Sticky recherche brede
var stickyTop = $('.stickyTop').offset().top; // returns number 
  $(window).scroll(function(){ // scroll event  
    var windowTop = $(window).scrollTop(); // returns number
    if (stickyTop < windowTop) {
      $('.stickyTop').addClass('fixsearch ');
    }
    else {
      $('.stickyTop').removeClass('fixsearch ');
    }
  });

*/



$(function() {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');

    // Nav toggle
    navToggle.on('click', function(e) {
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });
  
    // Nav dropdown toggle
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    });
  
    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function(e) {
        e.stopPropagation();
    });
});
});

