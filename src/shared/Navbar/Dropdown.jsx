import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  return (
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
  );
};

export default Dropdown;
