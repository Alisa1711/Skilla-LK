$(`.navigation__open`).on(`click`, function () {
  $(`.navigation`).toggleClass(`navigation--expanded`);
  $(`.header`).toggleClass(`header--nav-expanded`);
});
