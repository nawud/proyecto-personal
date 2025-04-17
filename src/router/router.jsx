import { createBrowserRouter } from "react-router-dom";
import Layout from "../componentes/layout/Layout";
import Inicio from "../pages/inicio/Inicio"; 
import Servicios from "../pages/servicios/Servicios";
import QuienSoy from "../pages/quiensoy/QuienSoy";
import Contacto from "../pages/contacto/Contacto";
import AvisoLegal from "../pages/avisolegal/AvisoLegal";
import PoliticaPrivacidad from "../pages/politicaprivacidad/PoliticaPrivacidad";
import PoliticaCookies from "../pages/politicacookies/PoliticaCookies";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Inicio />
            },
            {
                path: "servicios",
                element: <Servicios />
            },
            {
                path: "quien-soy",
                element: <QuienSoy />
            },
            {
                path: "contacto",
                element: <Contacto />
            },
            {
                path: "avisolegal",
                element: <AvisoLegal />
            },
            {
                path: "privacidad",
                element: <PoliticaPrivacidad />
            },
            {
                path: "cookies",
                element: <PoliticaCookies />
            },
            {
                path: "*",
                element: <h1 className="text-center text-2xl mt-10">404 - Página no encontrada</h1>
            }
        ]
    }
]);
