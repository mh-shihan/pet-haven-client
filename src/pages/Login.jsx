import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginAnimation from "../assets/animaiton/loginAnimation.json";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { signInUser, googleSignIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setSuccessMessage("");
    setErrorMessage("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        // React Toast
        Swal.fire({
          title: "Success!",
          text: "Phone added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });

        // Navigate After Login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.error(error);
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto mt-32 flex flex-col md:flex-row ">
      <div className="w-full xl:w-1/2 h-[60vh]">
        <h1 className="text-3xl md:text-5xl font-bold text-center  text-[#180202] ">
          Login now!
        </h1>

        <Lottie animationData={loginAnimation} loop={false}></Lottie>
      </div>
      <div className="w-full xl:w-1/2">
        <div>
          <div className="hero-content flex-col lg:flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="input input-bordered w-full"
                      required
                    />
                    <span
                      className="cursor-pointer absolute bottom-[37%] right-[3%]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-[#F0A83D] hover:text-[#180202] text-white text-lg md:text-2xl">
                    Login
                  </button>
                </div>
                <p>
                  New to this website? Please{" "}
                  <Link className="text-[#180202] font-bold" to="/signUp">
                    Register
                  </Link>
                </p>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && (
                  <p className="text-green-600">{successMessage}</p>
                )}
              </form>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-ghost font-bold text-[#180202]"
              >
                <FcGoogle></FcGoogle>
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
