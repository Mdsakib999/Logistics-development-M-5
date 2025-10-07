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
              Logistic
            </h2>
          </Link>
          <p className="text-gray-300 hover:border-b-1 hover:border-b-white w-auto sm:w-96 text-base leading-relaxed mb-8">
            Faucibus quis fringilla scelerisque dui. Amet parturient dui
            venenatis amet sagittis viverra vel tincidunt. Orci tincidunt.
          </p>
          <Button to="/contact" type="secondary">
            <MessageCircleMore />
            <span>Start Live Chat</span>
          </Button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Company</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Our Partners
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Our Network
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Resources</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/service"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Packing Supplies
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Faqs
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Pricing and Quotes
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Tips and Guides
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Help</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Customer Support
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Delivery Details
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:border-b-1 hover:border-b-white hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400 mb-4 md:mb-0">Copyright © 2023 Logistic</p>
        <p className="text-gray-400">Design By TokoTema</p>
      </div>
    </footer>
  );
}
