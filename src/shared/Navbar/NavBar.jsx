import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>
          <a>All Services</a>
        </NavLink>
      </li>

      {user && <Dropdown></Dropdown>}
    </>
  );

  const profile = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleLogOut}
        className="btn-sm bg-lite-gray text-white rounded-md md:btn md:text-white md:bg-[#F0A83D] md:hover:bg-dark-gray md:hover:border-dark-gray md:border-[#F0A83D]  "
      >
        Log Out
      </button>
      <div
        className="tooltip tooltip-left tooltip-warning"
        data-tip={`${user?.displayName}`}
      >
        <div>
          <div>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt=""
                className=" w-12 h-12  border bg-opacity-75  border-[#F0A83D] p-[2px] rounded-full"
              />
            ) : (
              <p className="break-all text-blue-600 font-light border rounded-lg">
                {user?.displayName}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="navbar bg-white  mb-16  px-0 md:px-4  shadow-md  fixed top-0 w-full z-10">
      <div className="w-[1280px] mx-auto ">
        <div className="navbar-start flex items-center   ">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-[#F0A83D] font-bold   lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <a className=" text-2xl md:text-5xl  ">
              <span className="text-dark-gray font-bold">Pet</span>
              <span className="font-extrabold text-[#F0A83D]">Haven</span>
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-bold text-dark-gray ">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end flex  justify-end mr-2">
          <div className="">
            {user ? (
              <div>{profile}</div>
            ) : (
              <Link to="/login">
                <button className="  btn-sm bg-lite-gray rounded-md text-white md:btn  md:bg-[#F0A83D] md:hover:bg-dark-gray md:border-[#F0A83D] md:text-white ml-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
