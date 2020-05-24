((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    const copy = d.querySelector('.Footer small')
    
    /* Captura el año y lo coloca en footer */
    copy.innerHTML = `&copy; ${new Date().getFullYear()} DiseñaTuWeb`

    /* scroll activate nav */
    $('.navbar-nav>li>a').on('click', () => $('.navbar-collapse').collapse('hide'))

    /* scroll movimiento */
    //https://github.com/cferdinandi/smooth-scroll
    const scroll = new SmoothScroll('a[href*="\\#"]:not([href=\\#carouselExampleCaptions])', {
      offset: 40,
      selectorHeader: '.navbar',
      speed: 1000,
      speedAsDuration: true
    })
  })
})(document);
