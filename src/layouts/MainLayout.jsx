import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/NavBar";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  return (
    <HelmetProvider>
      <div>
        <Toaster></Toaster>
        <nav>
          <NavBar></NavBar>
        </nav>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
