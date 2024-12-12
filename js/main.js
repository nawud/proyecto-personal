
// Barra de carga
document.addEventListener("DOMContentLoaded", function () {
  let loadingBar = document.querySelector(".loading-bar");
  let width = 0;

  let interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      document.querySelector(".preloader").style.display = "none";
    } else {
      width++;
      loadingBar.style.width = width + "%";
    }
  }, 20);
});

// Resto de tu código...

//efecto de maquina

document.addEventListener("DOMContentLoaded", function () {
  var texto = document.querySelector('.typewriter');
  var contenido = texto.innerHTML.trim();
  texto.innerHTML = '';

  function escribir(i) {
    if (i < contenido.length) {
      if (contenido.charAt(i) === '\n') {
        texto.innerHTML += '<br>';
      } else {
        texto.innerHTML += contenido.charAt(i);
      }
      i++;
      setTimeout(function () {
        escribir(i);
      }, 80);
    }
  }

  escribir(0);
});



// Función para los enlaces internos
document.addEventListener("DOMContentLoaded", function () {
  // Accedemos a los enlaces que apuntan a posiciones dentro de la página
  const anchors = document.querySelectorAll('a[href*="#"]');

  // Aprovechamos la altura del menú fijo
  const menu = document.querySelector("#nav");
  const menuHeight = menu.offsetHeight; // Ajusta el valor según sea necesario

  // Iteramos sobre cada uno de los enlaces internos y añadimos un evento click a cada uno de ellos
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      if (anchor.classList.contains('prevent')) {
        event.preventDefault();
      }

      // Obtenemos por cada enlace el valor de su atributo "href"
      const href = document.querySelector(anchor.getAttribute("href"));

      // Eliminamos la clase "active" de todos los enlaces
      anchors.forEach(function (link) {
        link.classList.remove("active");
      });

      // Añadimos la clase "active" al enlace sobre el cual se está produciendo el evento click
      anchor.classList.add("active");

      // Nos movemos hacia la sección que tiene el valor de href, posicionándonos en la posición descontada la altura del menú
      var paginacontacto = localStorage.getItem('contacto');
      console.log(paginacontacto);
      if (href || paginacontacto) {
        const offset = href.offsetTop - menuHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
          block: 'start',
        });
      }
      localStorage.removeItem('contacto');
      window.addEventListener('unload', function () {
        localStorage.clear();
      });
    });
  });
});



// Arrow up
function toggleScrollToTopButton() {
  var button = document.getElementById("scroll-to-top");
  var bodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (bodyScrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Agrega un evento de desplazamiento para llamar a la función
window.addEventListener("scroll", toggleScrollToTopButton);

// Agrega una función para desplazarse hacia arriba al hacer clic en el botón
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores compatibles con Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}

// Agrega un evento de clic al botón de desplazamiento superior
var scrollToTopButton = document.getElementById("scroll-to-top");
scrollToTopButton.addEventListener("click", scrollToTop);


// Agrega un listener para el evento scroll
window.addEventListener("scroll", function () {
  toggleScrollToTopButton();
});



// link de navegacion 
document.addEventListener("DOMContentLoaded", function () {
  // Agrega un controlador de eventos mostrado al offcanvas
  var offcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasDarkNavbar"));
  offcanvas._element.addEventListener("shown.bs.offcanvas", function () {
    // Obtén todos los enlaces del menú
    var menuLinks = document.querySelectorAll(".navbar-nav a");

    // Agrega un controlador de eventos clic a cada enlace
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Cierra el offcanvas al hacer clic en un enlace
        offcanvas.hide();
      });
    });
  });
});