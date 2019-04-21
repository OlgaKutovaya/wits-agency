$(document).ready(function () {

   let $svgPath = $('#path1'),
      $intro = $('#intro'),
      $content = $('#content');
   let timeFillPath = 3500;

   let $informativePage = $('#informativePage'),
      $header = $('#header'),
      $logo = $('#logo'),
      $langInfo = $('.lang-info'),
      $notifications = $('.notifications'),
      $ringImg = $('#ring-img'),
      $counterNotification = $('.count-notifications'),
      $dropDown = $('.dropdown');

   // Fill svg image
   setTimeout(function () {
      $svgPath.addClass('fill-path');
   }, timeFillPath);

   // Hide intro & show main content
   setTimeout(function () {
      $intro.addClass('d-none').removeClass('d-flex');
      $content.addClass('d-block').removeClass('d-none')
   }, timeFillPath + 700);

   // Smooth scrolling
   $('#pageDownLink').on('click', function (event) {
      if (this.hash !== '') {
         event.preventDefault();

         let hash = this.hash;

         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 900, function () {
            window.location.hash = hash;
         });
      }
   });

   // change header depending on offset of the #informativePage element in relation to viewport
   $(window).scroll(function () {
      let informativePageOffset = $informativePage.offset(),
         scrollTop = $(document).scrollTop(),
         headerHeight = $header.height();

      if (informativePageOffset.top < scrollTop + headerHeight) {
         $header.addClass('bg-transparent').removeClass('bg-cod-gray');
         $logo.attr('src', 'img/black-logo.svg');
         $langInfo.addClass('color-cod-gray');
         $notifications.addClass('color-cod-gray');
         $ringImg.attr('src', 'img/black-ring.svg');
         $counterNotification.addClass('d-none');
         $dropDown.addClass('d-block').removeClass('d-none')
      } else {
         $header.addClass('bg-cod-gray').removeClass('bg-transparent');
         $logo.attr('src', 'img/logo.svg');
         $langInfo.removeClass('color-cod-gray');
         $notifications.removeClass('color-cod-gray');
         $ringImg.attr('src', 'img/ring.svg');
         $counterNotification.removeClass('d-none');
         $dropDown.addClass('d-none').removeClass('d-block')
      }
   });

});