import { MessageCircleMore } from "lucide-react";
import { Link } from "react-router";
import Container from "../layout/Container";
import Button from "../ui/Button";
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-8">
      <Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {/* Company Info */}
        <div className="md:col-span-3">
          <Link>
            <h2 className="text-4xl font-light text-secondary mb-6">
              LANG Reisen GmbH & Co. KG
            </h2>
          </Link>
          <p className="text-gray-300 border-b-1 border-b-white w-auto sm:w-96 text-base leading-relaxed mb-8">
            Wir liefern Exzellenz in Logistik- und Transportlösungen weltweit – zuverlässig und innovativ.
          </p>
          <Button to="/contact" type="secondary">
            <MessageCircleMore />
            <span>Chat Starten</span>
          </Button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Nützliche Links</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Über uns

              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Ressourcen</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Verpackungsmaterialien
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
               Häufig gestellte Fragen
              </Link>
            </li>
            
            {/* <li>
              <Link
                to="/"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Tipps und Anleitungen
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Helfen</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Kundensupport
              </Link>
            </li>
            
            {/* <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li> */}
            <li>
              <Link
                to="/privacy"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Datenschutzrichtlinie
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400 mb-4 md:mb-0">Copyright © 2025 LANG Reisen GmbH & Co. KG. Alle Rechte vorbehalten.</p>
        {/* <p className="text-gray-400">Design By TokoTema</p> */}
      </div>
    </footer>
  );
}
