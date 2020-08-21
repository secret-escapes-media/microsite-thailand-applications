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
//    Form hide on success
///////////////////////////////////////

$('#widget-container-wrap').click(function(){
  // click within form container
  var checkComplete = setInterval(function(){
    // delay for css change to be applied
    if( $('.message-wrap:visible').length == 1 ){
      // if message shows, upload complete
      // hide form except for upload box
      $("#ev-widget-form .row:not(:last)").hide();
      // show complete message
      $("#ev-form-complete").show();
      // stop checkComplete
      clearInterval(checkComplete);
    }
  },500);
});
