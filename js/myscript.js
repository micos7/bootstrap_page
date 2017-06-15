$(function(){
"use strict";
//Activate Scrollspy
var topoffset = 50; //menu height
var slideqty = $('#featured .item').length;
var wheight = $(window).height();
var randSlide = Math.floor(Math.random()* slideqty);

$('#featured .item').eq(randSlide).addClass('active');

$('.fullheight').css('height',wheight);

$('body').scrollspy({
  target: 'header .navbar',
  offset: topoffset
})

//replace img inside carousel with background imgs
$('#featured .item img').each(function(){
  var imgSrc= $(this).attr('src');
  $(this).parent().css({'background-image': 'url('+imgSrc+')'});
  $(this).remove();
})

//adjust fullheight on window resize
$(window).resize(function() {
  wheight = $(window).height();
  $('.fullheight').css('height',wheight);
})


//add inbody class
var hash = $(this).find('li.active a').attr('href');

  if(hash !== '#featured'){
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }

//inbody class when scrollspy fires
$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
  var hash = $(this).find('li.active a').attr('href');

  if(hash !== '#featured'){
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }
});

 //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrollin

//adding carousel nav buttons
for(var i=0;i<slideqty;i++){
  var insertText = '<li data-target="#featured" data-slide-to="'+ i + '"';
  if(i == randSlide){
    insertText += ' class="active" ';
  }
  insertText += '></li>';
  $('#featured ol').append(insertText);
}

$('.carousel').carousel({
  pause: false
});

});