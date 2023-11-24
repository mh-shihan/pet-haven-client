import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { signInUser, googleSignIn } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setErrorMessage("");
    setSuccessMessage("");

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(location?.state ? location?.state : "/");
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="xl:hero  mt-20">
      <div className="text-center border">
        <h1 className="text-5xl font-bold text-blue-600 mt-32 border">
          Login now!
        </h1>
      </div>

      <div className="hero-content xl:w-1/2 flex-col lg:flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
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
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-blue-600 text-white text-2xl">
                Login
              </button>
            </div>
            <p>
              New to this website? Please{" "}
              <Link className="text-blue-600" to="/signUp">
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
            className="btn btn-ghost text-blue-600"
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
