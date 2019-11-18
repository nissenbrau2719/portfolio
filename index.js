function handleTheme() {
  $('#toggleTheme').click(function(){
    $('body').toggleClass('js-lightmodeBackground');
    $('section, nav, footer').toggleClass('js-lightmodeSection');
    $('h1, h2, a, p, i').toggleClass('js-lightmodeText');
    $('.fa-toggle-on').toggleClass('fa-flip-horizontal')
  });
}

$(handleTheme());