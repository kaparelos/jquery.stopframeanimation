/*

  jQuery Stop Frame Animation plugin 1.0.1
  The simplest yet effective jQuery stop frame animation plugin
 
  https://github.com/readyforaliens/jquery.stopframeanimation

  Available via the MIT license
  by Alexandros Filos Kaparelos (readyforaliens)

*/

(function ($) {
  "use strict";

  var timeout;

  $.fn.stopframeanimation = function (options) {

    var element = $(this);
    var length = element.length;
    var frame = 0;
    element.hide(); // reset frame visibility state

    // when "destroy" requested by opts
    if (options === "destroy") {
      window.clearTimeout(timeout);
      timeout = undefined;
      return;
    }

    // set default settings
    var settings = $.extend({
      interval: 15
    }, options);

    window.clearTimeout(timeout);
    updateAnimation(); // starts the animation

    function updateAnimation() {

      if (frame == 0) {
        element.eq(length - 1).hide(); // needed for animation reset
        element.eq(frame).show();
      } else {
        element.eq(frame - 1).hide();
        element.eq(frame).show();
      }

      frame++;
      if (frame == length) frame = 0;

      timeout = window.setTimeout(updateAnimation, settings.interval); // sets a new timeout

    }

  }

})(jQuery);
