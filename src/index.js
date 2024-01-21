let btns = document.querySelectorAll(".few")


function toggleSvg(event) {
    const svgContainer = event.currentTarget.querySelector('.quest_svg');
    
    // Перевірити наявність оригінального HTML елемента
    if (!svgContainer.originalHtml) {
      // Зберегти оригінальний HTML елемент
      svgContainer.originalHtml = svgContainer.innerHTML;
    }
  
    // Перевірити поточний стан SVG та замінити його на відповідний
    if (event.currentTarget.classList.contains('svg-replaced')) {
      // Повернути оригінальний HTML елемент
      svgContainer.innerHTML = svgContainer.originalHtml;
      event.currentTarget.classList.remove('svg-replaced');
    } else {
      const newSvg = document.getElementById('new-svg').innerHTML;
      // Замінити поточний HTML елемент на новий SVG
      svgContainer.innerHTML = newSvg;
      event.currentTarget.classList.add('svg-replaced');
    }
  }
  
btns.forEach(e=>{
    e.addEventListener("click", toggleSvg)
})