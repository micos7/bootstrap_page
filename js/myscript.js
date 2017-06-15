$(function(){
"use strict";
//Activate Scrollspy
var topoffset = 50; //menu height

$('body').scrollspy({
  target: 'header .navbar',
  offset: topoffset
})

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


$('.carousel').carousel({
  interval: false
});

});