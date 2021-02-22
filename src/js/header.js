;(function() {
  
  const body = document.querySelector('body')
  const burgerMenu = document.querySelector('.bugger-menu')
  const firstLevelTitle = document.querySelectorAll('.first-title')
  const mask = document.querySelector('.mask')

  if(burgerMenu) {

    const menuHandler = (e) => {
      if(body.classList.contains('menu-open')) {
        body.classList.remove('menu-open')
        body.style.overflow = 'scroll'
      }else {
        body.classList.add('menu-open')
        body.style.overflow = 'hidden'
      }
    }

    const secondMenuHandler = (e) => {
      e.preventDefault();
      if (e.currentTarget.nextElementSibling){
        e.currentTarget.nextElementSibling.classList.toggle('open')
      }
    }

    firstLevelTitle.forEach( title => {
      if (title.nextElementSibling){
        title.addEventListener('click', secondMenuHandler)
      }
    })


    burgerMenu.addEventListener('click', menuHandler)
    mask.addEventListener('click', menuHandler)

  }

})();