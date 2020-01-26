$(window).resize(function () {
  if (window.matchMedia(mediaQuery.large).matches) {
    $(`.navigation`).removeClass(`navigation--collapsed`);
    $(`.header`).removeClass(`header--nav-collapsed`);
  } else {
    $(`.navigation`).addClass(`navigation--collapsed`);
    $(`.header`).addClass(`header--nav-collapsed`);
  }
});

$(`.navigation__open`).on(`click`, function () {
  $(`.navigation`).toggleClass(`navigation--collapsed`);
  $(`.navigation`).toggleClass(`navigation--expanded`);
  $(`.header`).toggleClass(`header--nav-expanded`);
});
