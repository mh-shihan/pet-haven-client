import Lottie from "lottie-react";
import errorAnimation from "../assets/animaiton/404Animation.json";
import { Link } from "react-router-dom";
import NavBar from "../shared/Navbar/NavBar";
import Footer from "../shared/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col justify-center items-center h-[90vh] mt-6">
        <Lottie animationData={errorAnimation}></Lottie>
        <Link to={"/"}>
          <button className="btn text-white hover:text-[#180202] font-bold bg-[#F0A83D]">
            Go Home
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
