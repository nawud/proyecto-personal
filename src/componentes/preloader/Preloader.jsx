import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logowan.png"; // Asegúrate de que la ruta sea correcta
import "./Preloader.css"; // Importa el CSS

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="preloader">
      <img src={logo} alt="Cargando..." />
      <div className="preloader-bar-container">
        <div className="preloader-bar"></div>
      </div>
    </div>
  );
}

export default Preloader;
