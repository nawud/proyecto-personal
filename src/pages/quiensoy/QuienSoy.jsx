import yopc from "../../assets/img/yo-pc.jpg"; 
import yopc2 from "../../assets/img/yo-pcw.jpg"; 
import "./QuienSoy.css";

function QuienSoy() {
  return (
    <section id="Quiensoy" className="bg-gray-900 text-white py-12 quiensoy-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">QUIEN SOY</h2>
        <div className="image-container-wrapper"> {/* Nuevo div padre para las imágenes */}
          <div className="image-container"> {/* Div para la primera imagen */}
            <img src={yopc} alt="Miller Duwan" className="rounded-lg shadow-lg individual-image" />
          </div>
          <div className="image-container"> {/* Div para la segunda imagen */}
            <img src={yopc2} alt="Miller Duwan" className="rounded-lg shadow-lg individual-image" />
          </div>
        </div>

        <p className="text-lg text-center mt-8 px-4 md:px-0">
          Hola, soy Miller Duwan, técnico informático con más de 10 años de experiencia. Desde niño me ha fascinado la tecnología y su funcionamiento. Mi primer ordenador fue un equipo de escritorio que aún conservo y funciona. Aunque cometí errores como eliminar archivos críticos como `system32`, esos desafíos me llevaron a tomar mi primer curso de mantenimiento de ordenadores.
          <br /><br />
          Soy un desarrollador web apasionado por crear experiencias digitales que combinan funcionalidad y diseño. Mi enfoque se centra en construir soluciones tecnológicas eficientes que respondan a necesidades reales. Con experiencia en tecnologías frontend y backend, me especializo en la creación de interfaces intuitivas y responsivas que ofrecen una excelente experiencia de usuario en cualquier dispositivo.
          <br /><br />
          <strong>Filosofía:</strong> Creo firmemente que la tecnología debe estar al servicio de las personas. Por eso, cada proyecto que desarrollo está orientado a proporcionar valor real mediante soluciones prácticas, accesibles y escalables.
          <br /><br />
          Además, he trabajado con frameworks como Spring en Java, lo que me ha permitido desarrollar aplicaciones robustas y escalables.
        </p>
      </div>
    </section>
  );
}

export default QuienSoy;