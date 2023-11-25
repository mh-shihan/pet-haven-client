import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { IoIosArrowDropdown } from "react-icons/io";

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
          <a>Service</a>
        </NavLink>
      </li>

      {user && (
        <NavLink className="flex justify-center items-center">
          <li className="dropdown dropdown-bottom">
            <label tabIndex={0} className=" flex">
              <p>DashBoard</p>
              <span className="text-xl font-bold ">
                <IoIosArrowDropdown />
              </span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/myService"}>
                  <a>My-Service</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/addService"}>
                  <a>Add-Service</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/mySchedule"}>
                  <a>My-Schedule</a>
                </NavLink>
              </li>
            </ul>
          </li>
        </NavLink>
      )}
    </>
  );

  const profile = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleLogOut}
        className="btn  text-white bg-[#F0A83D] hover:bg-[#180202] border-[#F0A83D] hover:bg-[#F9A83D] hover:border-[#F9A83D]"
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
      <div className="navbar-start  ">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-[#F0A83D] font-bold mr-0 md:mr-10 lg:hidden"
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
          <a className=" normal-case md:text-5xl  ">
            <span className="text-[#180202] font-bold">Pet</span>
            <span className="font-extrabold text-[#F0A83D]">Haven</span>
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-bold text-[#180202] ">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end flex flex-col md:flex-row ml-8">
        <div className="">
          {user ? (
            <div>{profile}</div>
          ) : (
            <Link to="/login">
              <button className="btn  bg-[#F0A83D] hover:bg-[#180202] border-[#F0A83D] text-white ml-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
