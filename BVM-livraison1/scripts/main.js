$(document).ready(function(){
       $("html").removeClass("no-js").addClass("js");
       //$(".needjs").hide();


// hauteurs des pages ============================================================
    // on cache tout
   /* $( "#apropos, #contact, #close, #close2" ).hide();

    // on trouve la hauteur et on l'applique aux div
    var height = window.innerHeight || document.documentElement.clientHeight;
    $( "#accueil" ).css("min-height", height);
    // et si la fenêtre change de taille on change la hauteur
    $(window).resize(function(){
        var height = window.innerHeight || document.documentElement.clientHeight;
        $( "#accueil" ).css("min-height", height);
        //console.log(height);
    });
    */
 

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
     /*   
     $( ".plus" ).focus(function() {
      $( this ).next("ul").slideToggle( 300, "swing", function() {
         if ( $( this ).is( ":hidden" ) ) {
            $(this).prev().addClass('plus'); 
         }
         else {
            $(this).prev().removeClass('plus');
         }
      });
    });
*/
});
/*
$('nav > li > a').click(function(){
     if(true == $(this).next().is('ul.sub-menu')) {
        if(false == $(this).next().is(':visible')) {
            $('ul.sub-menu').slideUp(800);
        }
        $(this).next().slideDown(800);
    }
});
$('nav ul.sub-menu li').slideUp(800);


});


$(window).load(function(){


// hover des box ============================================================
    
    $(".box").hover(function(){
        $(this).find(".onTop").fadeIn(100);
    }
        ,function(){
            $(this).find(".onTop").fadeOut(500);
        });


});



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









