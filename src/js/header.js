;(function() {
  
  const body = document.querySelector('body')
  const header = document.querySelector('header.main-header')
  const burgerMenu = document.querySelector('.bugger-menu')
  const firstLevelTitle = document.querySelectorAll('.first-title')
  const firstLevelList = document.querySelectorAll('ul.first-level > li')
  const mask = document.querySelector('.mask')
  let nowWidth = window.innerWidth

  const setWindowWidth = () => {
    nowWidth = window.innerWidth
  }

  const menuHandler = (e) => {
    if(body.classList.contains('menu-open')) {
      body.classList.remove('menu-open')
      body.style.overflow = 'scroll'
    }else {
      body.classList.add('menu-open')
      body.style.overflow = 'hidden'
    }
  }

  const mobileSecondMenu = (e) => {
    if(e.currentTarget.nextElementSibling.classList) {
      e.preventDefault();
      e.currentTarget.nextElementSibling.classList.toggle('open')
    }
  }

  const desktopSecondMenu = (e) => {
    
    if(e.type === "mouseenter") {
      e.currentTarget.querySelector("ul.second-level").classList.add('open-animate')
    }else{
      e.currentTarget.querySelector("ul.second-level").classList.remove('open-animate')
    }

  }

  const setHeaderBackground = (e) => {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 10) {
      header.classList.add('bg')
    }else {
      header.classList.remove('bg')
    }
  }

  firstLevelTitle.forEach( title => {
    if (title.nextElementSibling){
      title.addEventListener('click', mobileSecondMenu)
    }
  })

  firstLevelList.forEach( list => {

    if( list.querySelector("ul.second-level")){
      list.addEventListener('mouseenter', desktopSecondMenu)
      list.addEventListener('mouseleave', desktopSecondMenu)
    }

  })

  
  burgerMenu.addEventListener('click', menuHandler)
  mask.addEventListener('click', menuHandler)

  window.addEventListener('scroll', setHeaderBackground)
  window.addEventListener('resize', setWindowWidth)

})();