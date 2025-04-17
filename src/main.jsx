import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import Preloader from "./componentes/preloader/Preloader"; // Importa tu preloader
import "./index.css";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tiempo del preloader antes de mostrar las rutas

    return () => clearTimeout(timer);
  }, []);

  // Muestra el preloader mientras se carga la app
  if (isLoading) {
    return <Preloader />;
  }

  // Una vez que termina el preloader, muestra las rutas
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
