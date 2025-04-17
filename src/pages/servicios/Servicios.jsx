import "./Servicios.css"; // Importa el archivo CSS para estilos personalizados

function Servicios() {
  return (
    <section id="Servicios" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">SOLUCIÓN Y VIDA ÚTIL</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Servicios de Reparación y Soporte</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reparación de Hardware y Software: Soluciones integrales para resolver problemas en dispositivos y sistemas informáticos.</li>
              <li>Soporte Técnico Presencial y Remoto: Asistencia técnica eficiente y conveniente.</li>
              <li>Ampliaciones de Hardware: Mejoras en rendimiento con instalación de RAM, discos SSD y tarjetas gráficas.</li>
              <li>Reemplazo de Hardware Dañado: Sustitución de componentes defectuosos para asegurar el funcionamiento óptimo.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Servicios de Configuración y Mantenimiento</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Instalación, Configuración y Mantenimiento de Sistemas Windows: Garantía de funcionamiento sin problemas.</li>
              <li>Eliminación de Virus y Malware: Protección de datos y privacidad del usuario.</li>
              <li>Resolución de Desconfiguraciones e Incompatibilidades: Asegurando compatibilidad y funcionamiento correcto.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;