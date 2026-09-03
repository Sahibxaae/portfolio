import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
type NavbarProps = {
  icon: string;
};
const Navbar = ({ icon }: NavbarProps) => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "ABOUT", path: "/about" },
    { name: "STACK", path: "/stack" },
    { name: "CONTACT", path: "/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-bg-nav text-text-bw flex justify-between items-center h-21.25 px-5 w-full">
        <div className="flex gap-4 w-82.25 items-center">
          <img src={icon} alt="" className="w-9.75 h-7" />
          <h2 className="font-bold text-text-header text-2xl font-geist">
            <TypeAnimation
              sequence={[
                "Mohamed Sahib",
                2000,
                "",
                500,
                "Frontend Developer",
                2000,
                "",
                500,
                "Full Stack Developer",
                2000,
                "",
                500,
                "Software Engineer",
                2000,
                "",
                500,
              ]}
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
        </div>
        <ul className=" hidden lg:flex gap-6.5 text-sm font-thin">
          {navItems.map((item, idx) => (
            <li key={idx} className="font-light">
              {" "}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-5 decoration-2 decoration-bg-blu"
                    : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex [w-300px] h-full items-center gap-2">
          <div className="bg-bg-blu w-2 h-2 rounded-full"></div>
          <div className="bg-text-main w-3 h-3 rounded-full "></div>
          <p>BUILDING & SHIPPING</p>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-2 ml-auto"
        >
          <span
            className={`block w-6 h-0.5 bg-text-main transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-text-main transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-text-main transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
        {/* mobile menu */}
      </nav>
      {/* hamburger menus */}
      <div
        className={`lg:hidden flex bg-bg-nav w-full overflow-hidden
    transition-all duration-300 ease-in-out ${
      menuOpen
        ? "max-h-screen opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-4 "
    }`}
      >
        <ul className="text-text-bw w-full flex flex-col gap-6 py-7 px-2.5 ">
          {navItems.map((items) => (
            <li className="w-full h-[35px] rounded-md flex items-center px-2.5 ">
              <NavLink
                to={items.path}
                className={({ isActive }) =>
                  isActive
                    ? " block w-full h-full underline underline-offset-5 decoration-2 decoration-bg-blu "
                    : "block w-full h-full"
                }
              >
                {items.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
