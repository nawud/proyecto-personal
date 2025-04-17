import Logowan from "../../assets/img/logowan1.png";
import "./Inicio.css";

function Inicio() {
  return (
    <section
      id="Inicio" className="bg-gray-900 text-white py-12 inicio-section" 
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">BIENVENIDO</h1>
        <div className="logo-container">
          <img
            src={Logowan}
            alt="Logotipo de THEWAN, soluciones tecnológicas para ti"
            className="logo-imagen"
          />
        </div>
        <p className="text-lg text-center mt-8 px-4 md:px-0">
          Bienvenido a THEWAN, donde la tecnología se pone al servicio de las
          personas. Con más de 10 años de experiencia en el mundo de la
          informática, ofrecemos soluciones tecnológicas innovadoras y
          personalizadas para satisfacer tus necesidades.
        </p>
      </div>
    </section>
  );
}

export default Inicio;