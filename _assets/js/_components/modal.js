var modal          = $('.js-modal'),
    modalLaunchBtn = $('.js-open-modal'),
    modalCloseBtn  = $('.js-close-modal');

// opens modal
function modalOpen(event, modalId){

  // is there a click event?
  if (event) {
    event.preventDefault();
    // find the modal id from clicked element
    var activeModalId = $(event.currentTarget).data('open-modal');
  } else {
    // find the modal id from passed string
    var activeModalId = modalId;
  }

  // find the active modal dom element
  var activeModal = $('*[data-modal-id="' + activeModalId + '"]');

  // disable scrolling on background content (doesn't work iOS)
  $('body').addClass('disable-scroll');

  // autostarts youtube
  if (activeModal.data('youtube-id')) {
    ytPlayer.playVideo();
  }

  // reveal the specific modal content
  activeModal.removeClass('is-closed').addClass('is-open');

  // open modal
  modal.show();
  $(modal).removeClass('is-closed').addClass('is-open');
}

// closes modal
function modalClose(event){
  event.preventDefault();
  // enable scrolling
  $('body').removeClass('disable-scroll');
  // close modal
  $('.modal__bg.is-open').hide();
  // close modal and active modal content
  $('modal__bg').removeClass('is-open').addClass('is-closed');
  $('.modal.is-open').removeClass('is-open').addClass('is-closed');
  // kill everything inside of video if its there
  ytPlayer.pauseVideo();
}


// launches modal when offer is clicked
modalLaunchBtn.on('click', function(event) {
  modalOpen(event);
});

// launches modal from url queryString
var modalQueryString = 'open-modal';
if (getQueryStringByName(modalQueryString)) {
  // find modal id & dom element
  var modalId = getQueryStringByName(modalQueryString);
  var modalElement = $('*[data-modal-id="' + modalId + '"]');
  // is there is a modal to open?
  if ( $(modalElement).length > 0 ) {
    // open without passing event
    modalOpen(null, modalId);
  }
}

// closes modal on close icon click
modalCloseBtn.on('click', function(event) {
  modalClose(event);
});

// closes modal on background click
modal.on('click', function(event) {
  if ($(event.target).hasClass('modal__wrap')){
    modalClose(event);
  }
});

// closes modal on escape key press
$(document).keyup(function(event) {
   if (event.keyCode == 27) {
     modalClose(event);
    }
});