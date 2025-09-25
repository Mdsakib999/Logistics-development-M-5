import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import TopHeader from "../../components/TopHeader";
import Container from "../layout/Container";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      // if click is outside navRef element → close nav
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // add event listener
    document.addEventListener("click", handleClickOutside);

    // cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={navRef} className="font-text bg-gray-200 sticky top-0 z-10 md:mb-12">
      <TopHeader />
      <Container className="pb-6 sm:pb-2">
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center justify-between">
          <Link to="/">
            <h2 className="text-[40px]">Logistic</h2>
          </Link>
          <ul className="flex gap-5">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/service"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
      {/*Mobile menu button */}
      <div className="flex pb-5 md:pb-0 sm:mb-0 relative px-12 justify-between items-center ">
        <h2 className="text-4xl block md:hidden">Logistic</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden cursor-pointer block md:mt-2 text-2xl`}
        >
          {isOpen ? "x" : "☰"}
        </button>
        {/*Mobile Menu */}
        {isOpen && (
          <div
            className={`absolute bg-gray-300 top-12 left-0 w-full shadow-lg md:hidden
          } `}
          >
            <ul className="flex flex-col p-4">
              <li className="hover:bg-white w-full rounded-lg">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active inline-block w-full py-2 px-4"
                      : "nav-link inline-block w-full py-2 px-4"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-white w-full rounded-lg">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active inline-block w-full py-2 px-4"
                      : "nav-link inline-block w-full py-2 px-4"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About us
                </NavLink>
              </li>
              <li className="hover:bg-white w-full rounded-lg">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active inline-block w-full py-2 px-4"
                      : "nav-link w-full inline-block py-2 px-4"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li className="hover:bg-white w-full rounded-lg">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active inline-block w-full py-2 px-4"
                      : "nav-link inline-block w-full py-2 px-4"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
