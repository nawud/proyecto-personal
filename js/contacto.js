
var contacto = "página contacto";
        localStorage.setItem('contacto', contacto);
        console.log(localStorage.getItem('contacto'));
(function () {
  const link = document.getElementById('read-more-link');
  console.log(link)
  const firstHalf = document.querySelector('.first-half');
  const secondHalf = document.querySelector('.second-half');

  link.addEventListener('click', () => {
    firstHalf.classList.toggle('showText');
    secondHalf.classList.toggle('showText');

    // Cambiar el texto del enlace
    link.innerText = (link.innerText === 'Mostrar más') ? 'Mostrar menos' : 'Mostrar más';

    // Evitar la recarga de la página
    return false;
  });

  
})();

