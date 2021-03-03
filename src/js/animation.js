;(function() {
  
  const loadingElements = document.querySelectorAll('#loading-page .col-xs-2')
  const programSectionBoxes = document.querySelectorAll('#section-programs .box')
  const animateArr = [
    {
      name: "#section-features .col-xs-12",
      active: "fade-fadeDown",
      reverse: false
    }, 
    {
      name: "#section-education",
      active: "fade-fadeDown",
      reverse: false
    },
    {
      name: "#section-teachers .col-xs-6",
      active: "fade-fadeDown",
      reverse: false
    },
  ]

  const rotateHandler = e => {
    let {offsetX, offsetY, currentTarget} = e
    
    if(e.target !== currentTarget) {
      offsetX += e.target.parentElement.offsetLeft
      offsetY += e.target.parentElement.offsetTop
    } 

    let xRotate = Math.floor((offsetY / currentTarget.offsetWidth) * 20) * 2 - 20
    let yRotate = Math.floor((offsetX / currentTarget.offsetHeight) * 20) * 2 - 20

    currentTarget.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotate * -1}deg) rotateY(${yRotate}deg)`

  }

  const removeRotateHandler = e => {
    e.currentTarget.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
  }

  const scrollHandler = (animateArr) => {
    let headerHeight = document.querySelector('.header-container').offsetHeight
    let scrollDistance = document.documentElement.scrollTop
    let targetTop = 0
    let windowBottom = 0
    let targets = null
    animateArr.forEach( section => {
      targets = document.querySelectorAll(section.name)

      targets.forEach( target => {
        targetTop = (target.offsetTop - headerHeight) - (target.offsetHeight) - 200
        windowBottom = targetTop + target.offsetHeight

        if(scrollDistance > targetTop && scrollDistance < windowBottom) {
          target.classList.add('active-start')
        }else {
          target.classList.add(section.active)
          if (section.reverse) {
            target.classList.remove('active-start')
          }
        }
        
        
      })
    })
  }

  const loadingAnimateStart = () => {
    loadingElements.forEach( (element) => {

      element.classList.add('change-color')
      setTimeout(() => {
        element.classList.remove('change-color')
      }, 800);

      setTimeout(() => {
        element.classList.add('opacity')
      }, 1600);

      setTimeout(() => {
        document.querySelector('#loading-page').style.display = 'none'
      }, 3000);
    } )
  }

  

  programSectionBoxes.forEach( (box) => {
    box.addEventListener('mousemove', rotateHandler)
    box.addEventListener('mouseout', removeRotateHandler)
  })

  window.addEventListener('scroll', function(e){
    scrollHandler(animateArr)
  })

  scrollHandler(animateArr)
  loadingAnimateStart()
})();