import React from "react";

function PoliticaPrivacidad() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">POLÍTICA DE PRIVACIDAD</h1>
        <p className="text-lg">
          TheWan informa sobre su política de privacidad. Tratamos los datos personales de los usuarios para gestionar las solicitudes de información recibidas y el envío de comunicaciones informativas y comerciales (vía electrónica). Los datos recogidos mediante un formulario de suscripción a la newsletter estarán ubicados dentro de la UE en los servidores de MailRelay bajo su política de privacidad.
        </p>
        <p className="mt-4">
          Para más información, consulte nuestra{" "}
          <a href="/avisolegal" className="text-red-400 hover:text-red-300">
            Aviso Legal
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default PoliticaPrivacidad;