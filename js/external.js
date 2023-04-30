
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



$(function() {
    $('.marquee')
      .marquee({
      //If you wish to always animate using jQuery
      allowCss3Support: true
      , //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
      css3easing: 'linear'
      , //requires jQuery easing plugin. Default is 'linear'
      easing: 'linear'
      , //pause time before the next animation turn in milliseconds
      delayBeforeStart: 1000
      , //'left', 'right', 'up' or 'down'
      direction: 'down'
      , //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: false
      , //speed in milliseconds of the marquee in milliseconds
      duration: 7000
      , //gap in pixels between the tickers
      gap: 20
      , //on cycle pause the marquee
      pauseOnCycle: false
      , //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
      pauseOnHover: true
      , //the marquee is visible initially positioned next to the border towards it will be moving
      startVisible: false
    });
  });


 


// // ************** Disable right click starts****************

// $(document).bind("contextmenu",function(e) {
// e.preventDefault();
// });


// $(document).keydown(function(e){
// if(e.which === 123){
//    return false;
// }
// });


// // ************** Disable right click Ends****************