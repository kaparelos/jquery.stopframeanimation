/*

 jQuery Stop Frame Animation plugin 1.0
 The simplest yet effective jQuery stop frame animation plugin
 
 Copyright (C) 2015 AFK - Alexandros Filos Kaparelos
 Available via the MIT license

 https://github.com/afklondon/jquery.stopframeanimation for details

*/

(function ($) {
  "use strict";

  var timeout;

  $.fn.stopframeanimation = function (options) {

    var element = $(this);
    var length = element.length;
    var frame = 0;
    element.hide(); // reset frame states    

    // if destroy requested
    if (options === "destroy") {
      window.clearTimeout(timeout); // clear timeout
      timeout = undefined;
      return;
    }

    // set default settings
    var settings = $.extend({
      interval: 15
    }, options);

    window.clearTimeout(timeout); // clear timeout
    updateAnimation(); // start animation

    function updateAnimation() {

      if (frame == 0) {
        element.eq(length - 1).hide(); // needed when animation resets
        element.eq(frame).show();
      } else {
        element.eq(frame - 1).hide();
        element.eq(frame).show();
      }

      frame++;
      if (frame == length) frame = 0;

      timeout = window.setTimeout(updateAnimation, settings.interval); // set a new timeout

    }

  }

})(jQuery);
