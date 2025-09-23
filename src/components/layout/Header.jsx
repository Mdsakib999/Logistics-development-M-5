import { useState } from "react";
import { NavLink } from "react-router";
import TopHeader from "../TopHeader";
import Container from "./Container";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-text">
      <TopHeader />
      <Container className="py-4">
        {/* Desktop menu */}
        <nav className="hidden md:flex h-[110px] items-center justify-between">
          <h2 className="text-[40px]">Logistic</h2>
          <ul className="flex gap-5 mr-[60px]">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink>Services</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/*Mobile menu button */}
    <div className="flex relative justify-between items-center">
              <h2 className="text-4xl block md:hidden">Logistic</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden block md:mt-2 text-2xl`}
        >
          {isOpen ? "x" : "☰"}
        </button>
                {/*Mobile Menu */}
        {isOpen && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              <li>
                <NavLink to="#" onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setIsOpen(false)}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setIsOpen(false)}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
    </div>
      </Container>
    </div>
  );
}
