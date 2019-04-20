$(document).ready(function () {

   let $svgPath = $('#path1'),
      $intro = $('#intro'),
      $content = $('#content');
   let timeFillPath = 3500;

   // Fill svg image
   setTimeout(function () {
      $svgPath.addClass('fill-path');
   }, timeFillPath);

   // Hide intro & show main content
   setTimeout(function () {
      $intro.addClass('d-none').removeClass('d-flex');
      $content.addClass('d-block').removeClass('d-none')
   }, timeFillPath + 700);
});