import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-30 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">
              TEXAS PREMIER ROOFING
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Hello
            </a> */}
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white"
            >
              Call to Get Started Today | (469) 773-9493
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 ">
                  <a href={item.href} className="block w-full text-center">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {/* <a href="#" className="py-2 px-3 border rounded-md">
      hello
    </a> */}
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 text-white"
              >
                Call to Get Started Today
                <div className=" flex flex-col marker:justify-center items-center">
                  (469) 773-9493
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
