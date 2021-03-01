;(function() {
  
  const programSectionBoxes = document.querySelectorAll('#section-programs .box')


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

  const removeRotateHandler = (e) => {
    e.currentTarget.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
  }

  programSectionBoxes.forEach( (box) => {
    box.addEventListener('mousemove', rotateHandler)
    box.addEventListener('mouseout', removeRotateHandler)
  })


})();