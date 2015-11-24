$(document).ready(function(){
       $("html").removeClass("no-js").addClass("js");
       //$(".needjs").hide();




// Les autres sites de Montesquieu ===========================
    
    $( ".slide").click(function ( event ){
        if ( $( "#externe" ).is( ":hidden" ) ) {
             $( "#externe" ).slideDown( 400 ) 
             $( ".fleche" ).rotate({animateTo:180});
         
         }
        else {$( "#externe" ).slideUp( 300)
              $( ".fleche" ).rotate({animateTo:0});
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

//$('.toggleEd').text( 'Masquer les ajouts éditoriaux');
$('.toggleEd').click(function() {
    //$(this).next('.toggle').slideToggle();

    $( ".editeur" ).toggle( "fast" );

    if ($(this).text() === 'Afficher les ajouts éditoriaux') {
        $(this).html('Masquer les ajouts éditoriaux');
    }
    else {
        $(this).html('Afficher les ajouts éditoriaux');
    }
});

});
/*



$(window).load(function(){


// resize img from small to big ===========================================

$(window).load(function resizeImages() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    $("#page img.projet").each(function() {
        var oldSrc = $(this).attr('src');
        if (width >= 668) {
            var newSrc = oldSrc.replace('_small.','_big.');
            var newWidth = 800;  var newHeight = 600; // qual 80% poids de 100k/img
        } else if ( width >= 480 ) {
            var newSrc = oldSrc.replace('_normal.','_big.');
            var newWidth = 600;  var newHeight = 450; // qual 40% poids de 14k/img
        }
        $(this).attr('src',newSrc);
        $(this).attr('width',newWidth);
        $(this).attr('height',newHeight);
    });
});
   
*/



// JAVASCRIPT sans Jquery
