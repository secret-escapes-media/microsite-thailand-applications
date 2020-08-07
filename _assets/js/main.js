// general js for the project that wouldn't be a reuseable component


$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('animate');
  },500);
});



if (getQueryStringByName('fromApp')) {
  $('body').addClass('fromApp');
}



///////////////////////////////////////
//    Video
///////////////////////////////////////

function videoPlay(){
  $('.banner').addClass('video-playing');
  setTimeout(function(){
    $('.banner__video-poster').fadeOut();
    $('.banner__video-iframe').fadeIn();
  },250);
  ytPlayer.playVideo();
}

$('.js-play-video').click(function(){
  videoPlay();
});

if (getQueryStringByName('video')) {
  videoPlay();
}




///////////////////////////////////////
//    Animate SVG paths
///////////////////////////////////////

// var path = $('.banner__window-path');
// $('.banner__window-path').each(function(){
//   var length = this.getTotalLength();
//   $(this).css({ 'stroke-dasharray': length });
//   $(this).css({ 'stroke-dashoffset': length });
// });



