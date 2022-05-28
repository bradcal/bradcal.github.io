  //Button
function press() {
    var p = document.getElementById("paragraph");
    p.style.display = "block";  	 
  }
  //Animation
  (() => {
    const h1El = document.querySelector('h1');
    const letters = h1El.textContent.split('');
    h1El.innerHTML = letters.map((l, i) => `<p style="--i: ${i}; --j: ${letters.length -1 - i}">${l == ' ' ? '&nbsp;': l}</p>`).join('');
    
    h1El.addEventListener('mouseenter', () => {
      h1El.classList.add('flip-in');
      h1El.classList.remove('flip-out');
    });
    
    h1El.addEventListener('mouseleave', () => {
      h1El.classList.remove('flip-in');
      h1El.classList.add('flip-out');
    });
  })()