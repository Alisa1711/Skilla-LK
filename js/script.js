"use strict";

$(function () {
  var mediaQuery = {
    large: "(min-width: 1440px)"
  };
  $(".navigation__open").on("click", function () {
    $(".navigation").toggleClass("navigation--expanded");
    $(".header").toggleClass("header--nav-expanded");
  });
});
//# sourceMappingURL=script.js.map
