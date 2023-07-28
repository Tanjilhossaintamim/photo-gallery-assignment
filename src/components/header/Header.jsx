import { BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import "./header.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authenicationSlice";
const Header = () => {
  const [navclass, setNavclass] = useState("hidden");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authenication.token);

  const toggleNavbar = () => {
    setNavclass(navclass == "hidden" ? "block" : "hidden");
  };
  const goToLogin = () => {
    navigate("/authenication");
  };
  const userLogout = () => {
    dispatch(logout());
  };
  return (
    <section className="h-wrapper sticky top-0 z-30 bg-color-black">
      <div className="main-container py-4 px-3 flex justify-between items-center sticky top-0 z-30">
        {/* left side  */}
        <div className="text-2xl md:text-3xl font-bold">
          <a href="/">
            Photo<span className="text-color-red">g</span>allery
          </a>
        </div>
        {/* middel */}
        <div className="hidden md:block">
          <ul className="flex space-x-12 font-bold text-lg">
            <li className="navlink">
              <NavLink
                to={"/"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                Home
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                to={"/about"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                About
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                to={"/service"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                Services
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                to={"/contact"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* right side  */}
        <div className="hidden md:block">
          <div className=" flex justify-between items-center gap-5 ">
            <div className="icon">
              <BsSearch />
            </div>

            {token == null ? (
              <button className="button" onClick={goToLogin}>
                Login
              </button>
            ) : (
              <button className="button" onClick={userLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
        {/* hamburger menu  */}
        <div className="md:hidden">
          <AiOutlineMenuFold
            size={"40px"}
            cursor={"pointer"}
            onClick={toggleNavbar}
          />
        </div>

        {/* for mobile menu  */}
        <div
          className={`${navclass} md:hidden absolute top-16 left-0 bg-slate-950 w-full h-[100vh] flex justify-center transition-all duration-200`}
        >
          <ul
            className="font-bold text-lg my-10 gap-10 flex flex-col"
            onClick={toggleNavbar}
          >
            <li className="navlink">
              <NavLink
                to={"/"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                Home
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                to={"/about"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                About
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                to={"/service"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                Services
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink
                to={"/contact"}
                className="hover:text-color-red transition-colors duration-200 ease-in"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
