// Generated by CoffeeScript 1.9.3

/*
 * Site JS
 */

(function() {
  window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  };

}).call(this);
