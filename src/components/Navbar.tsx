import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
type NavbarProps = {
  icon: string;
};
const Navbar = ({ icon }: NavbarProps) => {
  const navItems = ["HOME", "EXPERIENCE", "ABOUT", "STACK", "CONTACT"];
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <nav className="bg-bg-nav text-text-main flex justify-between items-center h-[110px] px-5 w-full">
      <div className="flex gap-4 w-[329px]">
        <img src={icon} alt="" className="w-8.75 h-8" />
        <h2 className="font-bold text-text-header text-2xl">
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
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="hidden lg:flex [w-300px] h-full items-center gap-2">
        <div className="bg-bg-blu w-2 h-2 rounded-full"></div>
        <div className="bg-text-main w-3 h-3 rounded-full "></div>
        <p>BUILDING & SHIPPING</p>
      </div>

      {/* Hamburger */}
      <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-2 ml-auto">
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

      <div>
        
      </div>
    </nav>
  );
};

export default Navbar;
