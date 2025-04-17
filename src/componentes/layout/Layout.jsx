import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";


function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}
        <Outlet />
       
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
