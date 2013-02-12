/*jslint browser: true, indent: 2, forin: true */
/*global jQuery */

(function ($) {
  "use strict";

  function cssPath(el) {
    if ($(el).attr('id')) {
      return '#' + $(el).attr('id');
    }
    return el.parents().andSelf().not('html').map(function () {
      var selector = $(this).prop('tagName').toLowerCase();
      if ($(this).attr('class') && selector !== 'body') {
        selector += "." + this.className.replace(/ /g, '.');
      }
      return selector;
    }).get().join(' > ');
  }

  $.fn.leer = function () {
    return this.each(function () {
      
    });
  };
}(jQuery));
