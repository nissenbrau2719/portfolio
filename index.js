function handleTheme() {
  $('#toggleTheme').click(function(){
    $('body').toggleClass('js-lightmodeBackground');
    $('section, nav, footer').toggleClass('js-lightmodeSection');
    $('h1, a, p').toggleClass('js-lightmodeText');
  });
}

$(handleTheme());