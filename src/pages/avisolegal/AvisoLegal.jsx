import React from "react";

function AvisoLegal() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">AVISO LEGAL</h1>
        <p className="text-lg">
          El hecho de acceder a este sitio web y utilizar los materiales contenidos en ella implica que usted ha leído y acepta, sin reserva alguna, estas condiciones. En algún caso, la utilización de alguno de los espacios o servicios contenidos en este sitio web puede estar sujeta a condiciones particulares de utilización. Lea atentamente dichas condiciones. La utilización de tales servicios significará la aceptación de las condiciones particulares que les sean aplicables.
        </p>
        <address className="mt-4">
          Nombre: Miller's S.A
          <br />
          Domicilio social: Parest Jordi, 20 - 08150 Parest del Vallès
          <br />
          CIF: B3456588
          <br />
          Contacto:{" "}
          <a href="mailto:duwan17@gmail.com" className="text-red-400 hover:text-red-300">
            duwan17@gmail.com
          </a>
        </address>
        <p className="mt-4">
          Para obtener detalles adicionales, consulte nuestra{" "}
          <a href="/privacidad" className="text-red-400 hover:text-red-300">
            Política de Privacidad
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default AvisoLegal;