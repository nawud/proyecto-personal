import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logowan.png";
import "./Preloader.css";

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
