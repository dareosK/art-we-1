$(document).ready(function() {
  console.log("Hello World")
  $('.background-fullscreen').ripples({
    resolution: 800,
    dropRadius: 50,
    perturbance: 0.84,
  });
});

setInterval(function() {
  const $el = $('.background-fullscreen');
  console.log($el);
  var x = Math.random() * $el.outerWidth();
  var y = Math.random() * $el.outerHeight();
  var dropRadius = 15;
  var strength = 0.04 + Math.random() * 0.02;

  $el.ripples('drop', x, y, dropRadius, strength);
}, 400);
