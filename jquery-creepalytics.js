/*jslint browser:true, indent: 2, nomen: true */
/*global jQuery, _gaq */

(function ($) {
  "use strict";

  function cssPath(el) {
    if ($(el).attr('id')) {
      return '#' + $(el).attr('id');
    }
    return el.parents().andSelf().not('html').map(function () {
      var selector = ($(this).prop('tagName') || '').toLowerCase();
      if ($(this).attr('class') && selector !== 'body') {
        selector += "." + this.className.replace(/ /g, '.');
      }
      return selector;
    }).get().join(' > ') || 'html';
  }

  $.fn.leer = function () {
    return this.each(function () {
      var track = (function (elt) {
        return function (evt, info) {
          elt.on(evt, function (e) {
            if (typeof info === 'function') {
              _gaq.push(['_trackEvent', cssPath(elt), evt, info($(this), e)]);
            } else {
              _gaq.push(['_trackEvent', cssPath(elt), evt]);
            }
          });
        };
      }($(this)));

      $.each({
        blur: null,
        change: function (elt) { return elt.val(); },
        click: function (elt, e) { return [e.clientX, e.clientY].join(','); },
        dblclick: function (elt, e) { return [e.clientX, e.clientY].join(','); },
        focus: null,
        keypress: function (elt, e) { return e.keyCode; },
        resize: function (elt) { return [elt.width(), elt.height()].join('x'); },
        scroll: function (elt) { return elt.scrollTop(); },
        submit: null
      }, track);
    });
  };
}(jQuery));
