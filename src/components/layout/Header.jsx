import TopHeader from "../TopHeader";
import {useState} from 'react';
import Container from "./Container";
import {NavLink} from 'react-router';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-text">
      <TopHeader />
      <Container>
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
        <button onClick={()=>setIsOpen(!isOpen)}
          className ="md:hidden block mt-2 float-right text-2xl" 
          >
            {isOpen ? 'x': '☰'}
        </button>
        {/*Mobile Menu */}
        {isOpen && (
                  <div className="absolute top-[110px] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            <li><NavLink to="#" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="#" onClick={() => setIsOpen(false)}>About us</NavLink></li>
            <li><NavLink to="#" onClick={() => setIsOpen(false)}>Services</NavLink></li>
            <li><NavLink to="#" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
        )}
      </Container>
    </div>
  );
}
