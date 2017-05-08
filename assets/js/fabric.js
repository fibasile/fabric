$(document).ready(function(){
  
  // $('#slogan').css({'height':window.height, 'text-align' :right} );  

// $('#slogan').videoBG({
//   mp4:'/assets/night.mp4',
//   webm: '/assets/night.webm',
//   poster:'/assets/video_cover.jpeg',
//   scale:true,
//   zIndex:0
// });

   smoothScroll.init({
     speed: 500, // Integer. How fast to complete the scroll in milliseconds
     offset: 100, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutCubic', // Easing pattern to use
     
   });
  
  $('.nav-toggle').click(function(){
    
    $('.nav-toggle').toggleClass('is-active');
    $('.nav-right').toggleClass('is-active');
    
  });
  
  $('.gh-subscribe input').addClass('input').css('margin-bottom',10);
  $('.gh-subscribe button').addClass('button is-primary').css('width','100%');


  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }
  
  function checkScroll() {
      // console.log('scroll');
      var el = $('#slogan');
      if (el.length > 0){
        if (isScrolledIntoView(el[0])){
          console.log('in vide');
          $('#top-menu').removeClass('nav-opaque');
        } else {
          $('#top-menu').addClass('nav-opaque');
        }
      }
  }
  
  $('#videoplayer').fitVids();
  
  $( document ).scroll(checkScroll);
  
  checkScroll();
    
});
