function handleTheme() {
  $('#toggleTheme').click(function(){
    $('body').toggleClass('js-lightmodeBackground');
    $('section, nav, footer').toggleClass('js-lightmodeSection');
    $('h1, a').toggleClass('js-lightmodeText');
  });
}

$(handleTheme());