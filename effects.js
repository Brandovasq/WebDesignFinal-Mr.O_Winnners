$(function(){  // $(document).ready shorthand
   $('.seen').fadeIn('slow');
 });
 
 $(document).ready(function() {
     
     /* Every time the window is scrolled ... */
     $(window).scroll( function(){
     
         /* Check the location of each desired element */
         $('.hideme').each( function(i){
             
             var bottom_of_object = $(this).position().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();
             
             /* If the object is completely visible in the window, it fades it in */
             if( bottom_of_window > bottom_of_object ){
                 
                 $(this).animate({'opacity':'1'},1500);
                     
             }
             
         }); 
     
     });
     
 });